import { Component,OnInit } from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';

@Component({

  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
    export class TemplateDrivenFormComponent implements OnInit {

      countrylist:country[]=[
        new country('1','india',),
        new country('2','usa',),
        new country('3','china',),
        new country('4','canada',)

      ]

      submitted=!false;
      datas:any[]=[];
      onsubmit(form:NgForm){
         console.log(form) //getvalues
         this.datas=form.value;
      }
      contact!:contact;
     ngOnInit(): void {
       this.contact={
      
        firstName:"Ex:Arun",
        lastName:"das",
        Email:"arunaruna2gs@gmail.com",
        Gender:"male",
        isMarried:true,
        Country:"canada",
        Address:{
         City:"erode",
         Street:"dubai kurukku santu",
         Pincode:"59990",
        }


       }
       
     }


}

class contact{
  firstName!:string;
  lastName!:string;
  Email!:string;
  Gender!:string;
  isMarried!:boolean;
  Country!:string;
  Address!:{
   City:string;
   Street:string;
   Pincode:string;
  }
}

 class country{
  id:string;
 name:string;

 constructor(id:string,name:string){
  this.id=id;
  this.name=name;
  }

 }

   

