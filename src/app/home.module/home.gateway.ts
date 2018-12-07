import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


@Injectable()
export class HomeGateway {

  constructor(private http:HttpClient){}

  getDataFromInsta(){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'text/html');
    return this.http.get<any>('https://www.instagram.com/dominodairyco/',{headers});
  }

  getOrderStatus(orderId:string, customerId:string){
    const body={
      orderId,
      customerId
    };
    return this.http.post<any>('customer/order_details',body);
  }

  getOrderETA(orderId:string, customerId:string){
    const body={
      orderList:[orderId],
      customerId
    };
    return this.http.post<any>('customer/estimated_time_arrival',body);
  }

  rateOrder(customerId,orderId,rating,comments){
    const body={
      customerId,orderId,rating,comments,
      type:"order"
    };

    return this.http.post<any>('customer/rate_order',body);

  }


}
