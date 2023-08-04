import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryModel } from '../../models/category.model';
import { QuizMakerQuestionnaireService } from '../../services/quiz-maker-questionnaire.service';
import { QuizMakerQuestionnaireComponent } from '../../components/quiz-maker-questionnaire/quiz-maker-questionnaire.component';
import { DifficultyModel } from '../../models/difficulty.model';

@Component({
  selector: 'quiz-maker-container',
  templateUrl: './quiz-maker-container.component.html',
  styleUrls: ['./quiz-maker-container.component.scss']
})
export class QuizMakerContainerComponent implements OnInit {
  public categoryList: CategoryModel = new CategoryModel();
  public selectedCategory: number = 0;
  public selectedDifficlty: string = 'Select difficulty';

  @ViewChild(QuizMakerQuestionnaireComponent)
  quizMakerQuestionnaireComponent: QuizMakerQuestionnaireComponent | undefined;

  enableSubmitBtn: boolean = false;
  constructor(private questionnaireService: QuizMakerQuestionnaireService) { }

  public difficultyLevels: DifficultyModel[] = [
    { name: 'Easy', id: 'easy' },
    { name: 'Medium', id: 'medium' },
    { name: 'Hard', id: 'hard' },
  ];

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.questionnaireService.getCategoryList().subscribe(data => {
      if (data) {
        this.categoryList = data;
      }
    });
  }

  public loadQuestionnaire() {
    this.quizMakerQuestionnaireComponent?.loadQuestionnaire(this.questionnaireService.totalNoOfQns, this.selectedCategory, this.selectedDifficlty);
  }

  enableSubmit(enableBtn: boolean) {
    this.enableSubmitBtn = enableBtn;
  }

  submitResults() {
    this.quizMakerQuestionnaireComponent?.calculateResult();
  }
}
