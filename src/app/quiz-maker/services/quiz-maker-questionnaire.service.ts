import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/category.model';
import { QuestionnaireModel } from '../models/questionnaire.model';

@Injectable({
  providedIn: 'root'
})
export class QuizMakerQuestionnaireService {

  public result: QuestionnaireModel[] = [];
  public totalNoOfQns: number = 5;

  constructor(private httpClient: HttpClient) { }

  private getCategoryApiUrl: string = 'https://opentdb.com/api_category.php';
  private getQuestionnaireApiBaseUrl: string = 'https://opentdb.com/api.php?';


  getCategoryList(): Observable<CategoryModel> {
    return this.httpClient.get<CategoryModel>(this.getCategoryApiUrl);
  }

  getQuestionnaire(amount: number, categoryId: number, difficultyLevel: string, type: string = 'multiple'): Observable<any> {
    let url = this.getQuestionnaireApiBaseUrl + "amount=" + amount + "&category=" + categoryId + "&difficulty=" + difficultyLevel + "&type=" + type;
    return this.httpClient.get(url);
  }

}
