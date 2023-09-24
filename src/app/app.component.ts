import { Component } from '@angular/core';

import { CustomerService } from './_services/customer.service';

@Component({
  selector: 'app-rootu ',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title="Angular";
users:any;

constructor(se:CustomerService){
}

 
}
