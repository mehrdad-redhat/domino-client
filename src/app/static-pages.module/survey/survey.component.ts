import {Component, OnInit} from '@angular/core';
import {Answer, SurveyQuestions} from '../../_models/interfaces';

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

    this.surveyQuestions = {
      productQuestion: [
        {
          id:0,
          text:'سوهان بستنی',
          answer:null
        },
        {
          id:1,
          text:'گز بستنی',
          answer:null
        },
        {
          id:2,
          text:'بیسکو بستنی',
          answer:null
        },
        {
          id:3,
          text:'شیر پاستوریزه (کامل / پرچرب / کم چرب و …) ',
          answer:null
        },
        {
          id:4,
          text:'بستنی لیوان پذیرایی (وانیل/نسکافه/توت فرنگی/شکلاتی و …)',
          answer:null
        },
        {
          id:5,
          text:'بستنی لیوان معمولی(وانیل / شکلات / توت فرنگی/ زعفرانی و …)',
          answer:null
        },
        {
          id:6,
          text:'بستنی آلپیرال ( زعفرانی / شکلاتی / رابی آناناس / رابی پرتقال و …)',
          answer:null
        },
        {
          id:7,
          text:'بستنی مگنولیا ( کلاسیک / دارک / دابل چاکلت / موزی و …)',
          answer:null
        },
        {
          id:8,
          text:'بستنی شیری (شیری / شکلاتی-شیری موزی و… )',
          answer:null
        },
        {
          id:9,
          text:'بستنی معجون',
          answer:null
        },
        {
          id:10,
          text:'بستنی چوبی تکی( قهوه / البالو / پرتقال / توت فرنگی / هلو و …)',
          answer:null
        },
        {
          id:11,
          text:'بستنی سالینو ( پرتقال / توت فرنگی / هلو و …)',
          answer:null
        },
        {
          id:12,
          text:'بستنی رابی ( آناناس / هلو / پرتقال و …)',
          answer:null
        },
        {
          id:13,
          text:'بستنی پوش آپ',
          answer:null
        },
        {
          id:14,
          text:'بستنی دورادو ( شکلاتی / توت فرنگی / وانیلی و …)',
          answer:null
        },
        {
          id:15,
          text:'بستنی ساندویچی مگنولیا',
          answer:null
        },
        {
          id:16,
          text:'بستنی یخی (لواشکی / زرشک / شاتوت-تمشک و …)',
          answer:null
        },
        {
          id:17,
          text:'بستنی دومینیتا',
          answer:null
        },
        {
          id:18,
          text:'بستنی ویفرنا ( زعفرانی / شکلاتی / توت فرنگی و …)',
          answer:null
        },
        {
          id:19,
          text:'بستنی عروسکی',
          answer:null
        },
        {
          id:20,
          text:'شیر استریلیزه 200 سی سی (پرچرب / کاکائو / موز / نسکافه /عسل/توت فرنگی و …) ',
          answer:null
        },
        {
          id:21,
          text:'شیر استریلیزه یک لیتری (پرچرب / کاکائو / کم چرب و …)',
          answer:null
        }
      ],
      otherQuestions: [
        {
          id:22,
          text:'کیفیت انواع لبنیات و بستنی تولیدی ما در چه سطحی ارزیابی می کنید ؟',
          answer:null
        },
        {
          id:23,
          text:'يكنواختي در تولید انواع لبنیات و بستنی را چگونه می بینید؟',
          answer:null
        },
        {
          id:24,
          text:'کیفیت بسته بندي محصولات ما در چه سطحی است؟',
          answer:null
        },
        {
          id:25,
          text:'میزان تاثیر کیفیت محصولات این شرکت در خرید مجدد شما چقدر است؟',
          answer:null
        },
        {
          id:26,
          text:'نحوه برخورد همکاران و نحوه پاسخگویی آنها را چگونه ارزیابی می کنید ؟',
          answer:null
        }
      ]
    };

    this.answers=[
      {
        id:0,
        value:4,
        text:'عالی'
      },
      {
        id:2,
        value:3,
        text:'خوب'
      },
      {
        id:3,
        value:2,
        text:'متوسط'
      },
      {
        id:4,
        value:1,
        text:'ضعیف'
      }
    ]
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



