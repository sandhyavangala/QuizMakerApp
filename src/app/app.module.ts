import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizMakerContainerComponent } from './quiz-maker/containers/quiz-maker-container/quiz-maker-container.component';
import { QuizMakerQuestionnaireComponent } from './quiz-maker/components/quiz-maker-questionnaire/quiz-maker-questionnaire.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { QuizMakerResultsComponent } from './quiz-maker/components/quiz-maker-results/quiz-maker-results.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizMakerContainerComponent,
    QuizMakerQuestionnaireComponent,
    QuizMakerResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
