import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm,FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
    
  contactform=new FormGroup({
    FirstName : new FormControl('Arundas',[Validators.required,Validators.minLength(10)]),
   LastName : new FormControl('ak',[Validators.required,Validators.maxLength(5)]),
   Email : new FormControl(),
   gender : new FormControl(),
   phone: new FormControl(),
   IsMarried : new FormControl(' ',[Validators.requiredTrue]),
   Country : new FormControl(),

   Address:new FormGroup({
  city:new FormControl('',[Validators.required]),
  Street:new FormControl('',[Validators.required]),
  password:new FormControl(),


   })
})


//                              -----Formbuilser start------

// formbuilder provide three -control,group,array

// contactform = this._formbuilder.group({                                          // formbuilder group
//   // FirstName: ['Arun',[Validators.required,Validators.minLength(10)]],

//   FirstName:this._formbuilder.control('Ak',[Validators.required,Validators.minLength(10)]),  // formbuilder control

//   LastName: ['G',[Validators.required,Validators.maxLength(5)]],
//   Email: ['arunarun2gs@gmail.com'],
//   IsMarried: ['',[Validators.requiredTrue]],
//   phone: [''],
//   Address: this._formbuilder.group({
//     Street: [''],
//     city: ['',[Validators.required]],
//     password: ['',[Validators.required]],
//   }),
// });
// constructor(private _formbuilder: FormBuilder) { }

//                                  -----Formbuilser end------



 get firstnameMethod(){
   return this.contactform.get('FirstName');
  }

  get lastnameMethod(){
    return this.contactform.get('LastName');
   }

   get marriedstatus(){
    return this.contactform.get('IsMarried');
   }
   get cityconfirm(){
    return this.contactform.get('Address')?.get('city');
   }
   get Streetconfirm(){
    return this.contactform.get('Address')?.get('Street');
   }
   
 OnSubmit(){
      console.log(this.contactform.value);
 }


  



}





