import { Component,OnInit } from '@angular/core';
import { Observable, fromEvent,Subscription, filter,takeUntil, from, interval, map, of, take, Subject } from 'rxjs';
import { CustomerService } from '../_services/customer.service';
// import { custobservable } from './custobservable';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent{
 

fromsub:any;

emit(){
  this.customerService.senddata(Math.random())
 }

constructor(private customerService:CustomerService){    //subject subcribe
   this.customerService.sub.subscribe(x=>{
    console.log("from observation component",x)
    this.fromsub=x;
   })
       
   


 var obs$=new Observable(obs=>{
  console.log("start Observable");
  obs.next("Hi I am back");
 });
 obs$.subscribe(x=>{
  console.log(x);
 })
  

 var obs:Subject<any>=new Subject();

 obs.subscribe(x=>{
  console.log("hi indians",x);
 })
obs.next("vatri nichaiyam")

obs.subscribe(x=>{
  console.log("hi tamilans",x);
 })
obs.next("success nichaiyam")

}

// mtdestryoy!:Subscription;

// ngOnInit(): void {
  
//    const myobs$ = new  Observable(obs => {
//     console.log("start observable");
//     obs.next('111');
//     obs.next('222');
//     // obs.error("not working")
//     // obs.complete();
//     setTimeout(()=>{
//       obs.next('133311');

//     },2000)
//     obs.next('444');

//     console.log("end observable");
  
//   });
//   // myobs$.subscribe(sub =>{
//   //   console.log("second"+sub);
//   // });
//  this.mtdestryoy=myobs$.subscribe(sub =>{
//     console.log(sub);
//   },
//   error=>{
//     console.log("error" +error)
//   },
//   ()=>{
//     console.log("completed")
//   });
  
// this.mtdestryoy.unsubscribe();

// // -----------------------------
// const number$= interval(1000).pipe(take(5));
// number$.subscribe((num=>{
//   console.log(num);
// }));

// const of$=of(1,2,3,4,5,6,7,8,9).pipe(filter(f=>f%2==0),map(m=>m*10));
// const of$1=of(1,2,3,4,5,6,7,8,9).pipe(map(m=>m*10));


// of$.subscribe((of=>{
//   console.log(of)
// }))

// of$1.subscribe((of=>{
//   console.log("second"+of)
// }))

// }


  
    
   

 

 }



























