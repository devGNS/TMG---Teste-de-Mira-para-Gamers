import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private readonly elemento: ElementRef) { }

  ngOnInit() {
  }

//   ngAfterViewInit(): void {
//     this.elemento.nativeElement.ownerDocument.body.style.backgroundColor = 'green';
// }

}
