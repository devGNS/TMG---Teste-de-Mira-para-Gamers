import { AlertService } from './../../../../services/alert.service';
import { UserService } from './../../../../services/user.service';
import { Component, OnInit,  Input } from '@angular/core';
import {Router} from '@angular/router'
import { ResponseLogin } from 'src/DTO/response-login-back-end.dto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() newTitle : any;

  loggedUser :  string;

  constructor(private readonly router: Router,
      private userService: UserService,
      private alertService: AlertService) { }

  ngOnInit(): void {

    this.userService.loggedUser.subscribe(user => {
      this.loggedUser = user.usuario;
      console.log("no Header, usuario", user);
    })
    this.userService.getLoggedUser();
  }


  navigateToGame(){
    this.router.navigate(['/game']);
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }

  navigateToCadastro(){
    this.router.navigate(['/cadastro']);
  }

  navigateToEstatisticas(){
    this.router.navigate(['/estatisticas']);
  }
}
