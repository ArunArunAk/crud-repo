
import { Component, ViewChild, ElementRef,OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms'
import { CustomerService } from '../_services/customer.service';


@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
  providers: [CustomerService]
})
export class TestingComponent  {


  title = 'FormArray Example in Angular Reactive forms';
 
  skillsForm: FormGroup;
  moviesForm!:FormGroup;

  
 
  constructor(private fb:FormBuilder) {
 
    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([]) ,
    });
    
      this.moviesForm=this.fb.group({
        MoviesName:"",
        MoviesDetail: this.fb.array([]) ,

       });
 
  
  }

  
  // constructor(private fb:FormBuilder) {
 
  //   this.skillsForm = this.fb.group({
  //     name: '',
  //     skills: this.fb.array([]) ,
  //   });
  // }

 
  get skills1() : FormArray {
    return this.skillsForm.get("skills") as FormArray
  }
 
  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    })
  }
 
  addSkills() {
    this.skills1.push(this.newSkill());
  }
 
  removeSkill(i:number) {
    this.skills1.removeAt(i);
  }
 
  deleteAll() {
    this.skills1.clear();
  }
  onSubmit() {
    console.log(this.skillsForm.value);
  }
 
   
 


  get moviesDetailss() : FormArray{
    return this.moviesForm.get("MoviesDetail")as FormArray;
  }
  addnewmoviesDetail() : FormGroup{
           return this.fb.group({
            MovieCollection:"",
            moviesStatus:"",
           })
  }

  addmoviesDetail(){
        this.moviesDetailss.push(this.addnewmoviesDetail())
  }
  enter(){
    console.log(this.moviesForm.value)
  }
  removemovie(i:number) {
    this.moviesDetailss.removeAt(i);
  }
 
  deleteAllmovies() {
    this.moviesDetailss.clear();
  }


}

