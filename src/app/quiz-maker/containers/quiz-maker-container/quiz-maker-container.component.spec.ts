import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizMakerContainerComponent } from './quiz-maker-container.component';

describe('QuizMakerContainerComponent', () => {
  let component: QuizMakerContainerComponent;
  let fixture: ComponentFixture<QuizMakerContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizMakerContainerComponent]
    });
    fixture = TestBed.createComponent(QuizMakerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
