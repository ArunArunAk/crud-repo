import { Component } from '@angular/core';
import { CustomerService } from '../_services/customer.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
  providers: [CustomerService]//2//
})
export class TwoComponent {
constructor(public custom:CustomerService){}
more(){
  this.custom.countincrease()
}
}
