import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormControlName,ReactiveFormsModule, Validators} from '@angular/forms'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
 title = 'Book details';
 loginForm= new FormGroup({
  user: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
  password: new FormControl('',[Validators.required, Validators.minLength(6)])

 })
 loginUser(){
  console.warn(this.loginForm.value)
 }
  constructor() { }

  ngOnInit(): void {
  }
  get user(){
    return this.loginForm.get('user');
  }

  get password(){
    return this.loginForm.get('password')
  }

}
