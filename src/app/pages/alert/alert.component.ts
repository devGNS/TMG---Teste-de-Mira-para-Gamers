
import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { AlertData, AlertType } from 'src/DTO/alert.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: AlertData) {}

  get isSuccess(): boolean {
    return this.data.type === AlertType.SUCCESS;
  }
}
