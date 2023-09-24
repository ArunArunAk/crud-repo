import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpService } from '../_services/http.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {

   todos:any=null;//list of todo
   todo:any=null;//particular selected todo
   showadd=false;
   message:any=" ";


  constructor(private httpsservices:HttpService) { }

  openTodo(todo:any){
    this.httpsservices.getTodoData(todo.id).subscribe(data=>{
      this.todo=data;
    });
  }

   add(){
    this.showadd=true;
    this.todo={};
    // this.message='';
   }

   save(){
    const api=this.todo.id?this.httpsservices.puttododata(this.todo) :
         this.httpsservices.posttododata(this.todo);

         api.subscribe(x=>{
          this.message=!this.todo.id ? "todo cretaed succesfully": `todo ${this.todo.id} edit succesfully` ;
          this.todo=null;
          this.todos=null;
          this.showadd=false;
         });
   }
 
   delete(){
    this.httpsservices.deletetododata(this.todo.id).subscribe(x=>{
      this.message=`todo ${this.todo.id} delete succesfully`;
      this.todo=null;
      this.todos=null;
      this.showadd=false;
    });
   }


   getData() {
    this.message="";
    this.httpsservices.gettodos().subscribe((data: any) => {
      this.todos = data;
    });
 
  }

  back(){
    this.todo=null;
    this.todos=null;
    this.showadd=false;
    }

}







