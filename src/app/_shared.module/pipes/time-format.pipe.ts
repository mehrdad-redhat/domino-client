


import { Pipe, PipeTransform } from '@angular/core';


/**
 * it's a pipe named 'createTime' that is written to get a number (seconds) and turn that into (hh:mm:ss) format
 */
@Pipe({name: 'timeFormat'})

export class CreateTimePipe implements PipeTransform {
  static addZero(val: number): string{
    let result: string;
    val = +val.toFixed(0);
    if(val<10){
      result = '0' + val;
    }
    else{
      result = '' + val;
    }
    return result;
  }
 static setHour(hour: any): string{
    if(hour == 0){
      hour = '';
    }
    else{
      hour = CreateTimePipe.addZero(hour);
      hour = hour + ':';
    }
    return hour
  }

  /**
   *
   * @param time
   * @return {any[]}
   */
  transform(time: any): string{

    let hour = Math.floor(time/3600);
    time = time - hour*3600;
    let minute = Math.floor(time/60);
    time = time - minute*60;
    return CreateTimePipe.setHour(hour)+ CreateTimePipe.addZero(minute) + ':' + CreateTimePipe.addZero(time);

  }
}
