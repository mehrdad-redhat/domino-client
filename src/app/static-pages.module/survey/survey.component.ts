import {Component, OnInit} from '@angular/core';
import {Answer, SurveyQuestions} from '../../_models/interfaces';
import {surveyAnswersList, surveyQuestionsList} from '../../_data/mock-data';

@Component({
  selector: 'd-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['../static-pages.module.scss', './survey.component.scss']
})
export class SurveyComponent implements OnInit {

  constructor() {
  }
  phonePattern="^(9|(09)|(\\+989))(((1)|(3)|(2))([0-9]))(\\d{7})";

  ngOnInit() {

    this.surveyQuestions = surveyQuestionsList;

    this.answers=surveyAnswersList;
  }

  surveyQuestions: SurveyQuestions = {
    productQuestion: [],
    otherQuestions: []
  };

  answers:Answer[]=[];

  submitSurvey(){
    console.log(this.surveyQuestions);
  }

}



