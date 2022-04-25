import { Component, OnInit,  Input } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() newTitle : any;
  constructor(private readonly router: Router) { }

  ngOnInit(): void {
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
