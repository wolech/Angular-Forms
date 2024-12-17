import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css'],
  imports: [CommonModule, FormsModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatCardModule]
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
user: any;

  onUpdate() {
    console.log('Updated Customer Data:', this.customer);
    // Add your update logic here
  }
}
