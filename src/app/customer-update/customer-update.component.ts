import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent {
  customer = {
    accountNumber: '',
    businessName: '',
    phoneNumber: '',
    currentAdminName: '',
    newAdminName: '',
    newAdminEmail: '',
    date: ''
  };

  onUpdate() {
    console.log('Updated Customer Data:', this.customer);
    // Add your update logic here
  }
}
