import { Injectable } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {BehaviorSubject} from 'rxjs';
import {HomeGateway} from './home.gateway';


@Injectable()
export class HomeService {

  private _orderId = new BehaviorSubject<string>('');
  private _orderDetails = new BehaviorSubject<any>(null);
  private _orderStatus = new BehaviorSubject<string>('');

  constructor(private homeGateway:HomeGateway){}
  
  getDataFromInsta(){
    return this.homeGateway.getDataFromInsta();
  }

  sendOrderID(id:string){
    this._orderId.next(id)
  }

  getOrderID():Observable<any>{
    return this._orderId.asObservable();
  }

  getOrderDetails(orderId:string,customerId:string){
    return this.homeGateway.getOrderStatus(orderId,customerId);
  }

  rateOrder(customerId,orderId,rating,comments){
    return this.homeGateway.rateOrder(customerId,orderId,rating,comments);
  }

  sendOrderDetailsResult(id:any){
    this._orderDetails.next(id)
  }

  getOrderDetailsResult():Observable<any>{
    return this._orderDetails.asObservable();
  }

  sendOrderStatus(id:string){
    this._orderStatus.next(id)
  }

  getOrderStatus():Observable<any>{
    return this._orderStatus.asObservable();
  }

  getOrderETA(orderId:string,customerId:string){
    return this.homeGateway.getOrderETA(orderId,customerId);
  }


}
