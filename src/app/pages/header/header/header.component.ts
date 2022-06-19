import { AlertService } from './../../../../services/alert.service';
import { UserService } from './../../../../services/user.service';
import { Component, OnInit,  Input } from '@angular/core';
import {Router} from '@angular/router'


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
      if(user){
        this.loggedUser = user.usuario;
        console.log("no Header, usuario", user);
      }else{
        this.loggedUser = '';
      }

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
    if(!this.userService.hasUserLogged()){
      this.router.navigate(['/login']);
    }
    else{
      this.router.navigate(['/estatisticas']);
    }

  }

  loggout(){
    this.userService.loggout();
  }
}
