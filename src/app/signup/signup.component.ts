import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatCardModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  user = {
    name: '',
    password: '',
    errorMessage:''
  };

  users = [
    { name: 'wojciech', password: 'wojciech123' },
    { name: 'kaushik', password: 'kaushik567' },
    { name: 'michal', password: 'michal741' }
  ];
  

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Initialization logic here
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', this.user);
      const validUser = this.users.find(u => u.name === this.user.name && u.password === this.user.password);
      if (validUser) {
        console.log('Login successful');
        this.router.navigate(['/customer-update']); // Redirect to the update component
      } else {
        console.log('Invalid credentials');
      }
    }
  }


}
