import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { QuizMakerQuestionnaireService } from '../../services/quiz-maker-questionnaire.service';
import { AnswerModel, QuestionnaireModel } from '../../models/questionnaire.model';
import { Router } from '@angular/router';


@Component({
  selector: 'quiz-maker-questionnaire',
  templateUrl: './quiz-maker-questionnaire.component.html',
  styleUrls: ['./quiz-maker-questionnaire.component.scss']
})
export class QuizMakerQuestionnaireComponent implements OnInit {

  @Output() enableSubmit = new EventEmitter<boolean>();

  public questionsList: QuestionnaireModel[] = [];
  count: number = 0;
  showResult: boolean = false;

  constructor(private quizmakerService: QuizMakerQuestionnaireService, private router: Router) { }

  ngOnInit(): void { }

  // Gets Qns from server
  public loadQuestionnaire(amount: number, categoryId: number, difficultyLevel: string) {
    this.quizmakerService.getQuestionnaire(amount, categoryId, difficultyLevel).subscribe(data => {
      if (data) {
        this.questionsList = <QuestionnaireModel[]>data.results;
        this.questionsList.forEach(x => {
          x.answers = [];
          x.incorrect_answers.concat(x.correct_answer).forEach(y => {
            const answerModel = new AnswerModel();
            answerModel.answer = y;
            x.answers.push(answerModel)
          });
        });
        this.randomizeAnswers();
      }
    }
    );
  }

  randomizeAnswers() {
    this.questionsList.forEach(x => {
      x.answers = x.answers.sort(() => Math.random() - 0.5);
    });
  }

  // Find and apply styles to the selected answers
  highlightAnswer(question: string, answer: string) {
    this.questionsList.forEach(element => {

      if (element.question == question) {
        let incrementCounter = element.question == question && element.answers.find(x => x.selectedAnswer);
        element.answers.forEach(ans => {
          if (ans.answer == answer) {
            element.isSelectedAnswerCorrect = ans.answer == element.correct_answer;
            if (!incrementCounter) {
              this.count = this.count + 1;
            }
            ans.selectedAnswer = true;
            return;
          }
          else {
            ans.selectedAnswer = false;
          }
        })
      }
    });
    this.enableSubmit.emit(this.questionsList.length == this.count);
  }

  calculateResult() {
    this.count = 0;
    this.showResult = true;
    this.quizmakerService.result = this.questionsList;
    this.router.navigateByUrl("results");
  }

}
