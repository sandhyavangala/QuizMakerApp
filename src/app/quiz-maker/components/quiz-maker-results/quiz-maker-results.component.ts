import { Component, OnInit } from '@angular/core';
import { QuizMakerQuestionnaireService } from '../../services/quiz-maker-questionnaire.service';
import { QuestionnaireModel } from '../../models/questionnaire.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-maker-results',
  templateUrl: './quiz-maker-results.component.html',
  styleUrls: ['./quiz-maker-results.component.scss']
})
export class QuizMakerResultsComponent implements OnInit {

  score: number = 0;
  totalScore: number = this.quizmakerService.totalNoOfQns;
  resultColor: string = 'green';

  public resultList: QuestionnaireModel[] = [];
  count: number = 0;
  showResult: boolean = false;

  constructor(private quizmakerService: QuizMakerQuestionnaireService, private router: Router) { }
  
  ngOnInit(): void {
    this.resultList = this.quizmakerService.result;
    this.getScore();
  }

  getScore() {
    this.score = this.resultList.filter(x => x.isSelectedAnswerCorrect)?.length;
    if (this.score <= 1) {
      this.resultColor = 'red'
    }
    else if (this.score == 2 || this.score == 3) {
      this.resultColor = 'yellow'
    }
    else {
      this.resultColor = 'green'
    }
  }

  createNewQuiz() {
    this.router.navigateByUrl('');
  }
}
