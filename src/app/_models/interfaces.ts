export interface SurveyQuestions {
  productQuestion: Question[];
  otherQuestions: Question[]
}

export interface Question {
  id:number;
  text:string;
  answer:number;
}

export interface Answer {
  id:number;
  text:string;
  value:number;
}

export interface ISelectOption {
  value?:string;
  title?:string;
}

export interface Link {
  title:string;
  link:string;
  queryParams?:any;
}

export interface InstaInfo {
  thumbnail:string;
  likeNumbers:number;
  isItVideo:boolean;
  caption:string;
  shortCode:string;
}

export interface ArticleThumbnail {
  category?:string;
  category_alias?:string;
  title?:string;
  description?:string;
  alias?:string;
  image_link?:string;
}

export interface Slide {
  caption?:string;
  button_caption?:string;
  button_link?:string;
  images?:string[]
}
