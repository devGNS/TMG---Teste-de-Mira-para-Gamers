import { UserBackEndResponse } from './../../../DTO/user-back-end-response.dto';
import { ResponseLogin } from './../../../DTO/response-login-back-end.dto';
import { UserService } from './../../../services/user.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, ElementRef, OnInit } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private readonly media: MediaMatcher,
    private userService: UserService
  ) {}

  userReceived : ResponseLogin;

  userForm: FormGroup;

  ngOnInit() {
    this.createUserForm();
  }

  createUserForm() {
    this.userForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // verifyUser() {
  //   if (this.userForm.valid) {
  //     console.log('verify-user');

  //     const filter = {
  //       username: this.userForm.controls['email'].value,
  //       password: this.userForm.controls['senha'].value,
  //     };
  //      this.userService.verificarLogin(filter).pipe(take(1)).subscribe(user => {
  //        this.userReceived = user;
  //        if(this.userReceived){
  //         let jsonData = JSON.stringify(this.userReceived)
  //         localStorage.setItem('user', jsonData)
  //        }

  //        console.log(this.userReceived);
  //      })
  //   }
  // }

  verifyUser() {
    if (this.userForm.valid) {
      console.log('verify-user');

      const filter = {
        username: this.userForm.controls['email'].value,
        password: this.userForm.controls['senha'].value,
      };
       this.userService.verificarLogin(filter);
    }
  }
}
