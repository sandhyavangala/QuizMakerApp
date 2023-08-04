import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizMakerResultsComponent } from './quiz-maker/components/quiz-maker-results/quiz-maker-results.component';
import { QuizMakerContainerComponent } from './quiz-maker/containers/quiz-maker-container/quiz-maker-container.component';

const routes: Routes = [
{ path: '', component: QuizMakerContainerComponent },
{ path: 'results', component: QuizMakerResultsComponent },
{ path: '**', component: QuizMakerContainerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
