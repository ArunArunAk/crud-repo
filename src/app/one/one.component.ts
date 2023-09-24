import { Component } from '@angular/core';
import { CustomerService } from '../_services/customer.service';

// import { CustomerService } from '.app/_services/customerService.ervices';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {
  users:any;

  
  constructor(private customerService:CustomerService){
    
    this.customerService.sub.subscribe(x=>{
     console.log("from one component",x)
    });
  
  }

  more(){
    this.customerService.countincrease()
  }
}
