import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MediaMatcher} from '@angular/cdk/layout'
import { CreateUpdateUserDto } from 'src/DTO/create-user.dto';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  userForm : FormGroup;

  constructor(private _fb : FormBuilder,
    private readonly media: MediaMatcher,
    private userService: UserService) {

     }

  ngOnInit() {
    this.createUserForm();
  }

  createUserForm(){
    this.userForm = this._fb.group({
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      email:['', [Validators.required, Validators.email]],
      senha:['', [Validators.required, Validators.minLength(6)]],
    })
  }

  saveUserForm(){

    if(this.userForm.valid){
      const filter : CreateUpdateUserDto = {
        usuario: this.userForm.controls['usuario'].value,
        email: this.userForm.controls['email'].value,
        senha: this.userForm.controls['senha'].value,
      }
      console.log("userForm-->", filter);

      this.userService.createUser(filter);

    }
  }

}
