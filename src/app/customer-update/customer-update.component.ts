import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatCardModule]
})

export class CustomerUpdateComponent {
  [x: string]: any;
  customer = {
  updateForm: FormGroup,
  };
user: any;
  updateForm!: FormGroup<any>;
constructor(private router: Router) {}

ngOnInit(): void {
  this.updateForm = this['fb'].group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    newAdminEmail: ['', [Validators.required, Validators.email]]
  });
}


  onUpdate() {
    console.log('Updated Customer Data:', this.customer);
    this.router.navigate(['/endpage']);
  }
}
