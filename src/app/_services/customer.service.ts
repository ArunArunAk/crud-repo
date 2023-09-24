import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


sub!:Subject<any>;

 constructor(){
  this.sub=new Subject<number>();
 }

senddata(data:number){
    this.sub.next(data);
}




  count=0;

countincrease(){
  this.count++;

}


}
