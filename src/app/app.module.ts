 

import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TestingComponent } from './testing/testing.component';
import { UserlistHttpserviceComponent } from './userlist-httpservice/userlist-httpservice.component';
import { HttpClientModule } from '@angular/common/http';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { CustomerService } from './_services/customer.service';
import { ObservableComponent } from './observable/observable.component';
import { HttpService } from './_services/http.service';
import { CrudComponent } from './crud/crud.component';
import { JsonCrudComponent } from './json-crud/json-crud.component';
// import { sharedmodule } from './shared.module';
//1




@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    TestingComponent,
    UserlistHttpserviceComponent,
    OneComponent,
    TwoComponent,
    ObservableComponent,
    CrudComponent,
    JsonCrudComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule

    // Add FormsModule to the imports array 
  ],
  bootstrap: [AppComponent],

  providers: [CustomerService,HttpService]//2//
})
export class AppModule { }
