import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizMakerQuestionnaireComponent } from './quiz-maker-questionnaire.component';

describe('QuizMakerQuestionnaireComponent', () => {
  let component: QuizMakerQuestionnaireComponent;
  let fixture: ComponentFixture<QuizMakerQuestionnaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizMakerQuestionnaireComponent]
    });
    fixture = TestBed.createComponent(QuizMakerQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
