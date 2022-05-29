import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MediaMatcher} from '@angular/cdk/layout'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  userForm : FormGroup;

  constructor(private _fb : FormBuilder,
    private readonly media: MediaMatcher) {

     }



  ngOnInit() {
  }

  createUserForm(){
    this.userForm = this._fb.group({
      usuario: ['', [Validators.required], Validators.minLength(3)],
      email:['', [Validators.required, Validators.email]],
      senha:['', [Validators.required, Validators.minLength(6)]],
    })
  }

}
