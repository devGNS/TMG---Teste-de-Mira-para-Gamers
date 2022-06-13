
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AlertType } from 'src/DTO/alert.model';
import { AlertComponent } from 'src/app/pages/alert/alert.component';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(public snackBar: MatSnackBar) {}

  config: MatSnackBarConfig = {
    duration: 5000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
  };

  success(message: string): void {
    this.config.panelClass = ['custom-alert-success'];
    this.snackBar.openFromComponent(AlertComponent, {
      ...this.config,
      data: {
        message,
        type: AlertType.SUCCESS,
      },
    });
  }

  error(message: string): void {
    this.config.panelClass = ['custom-alert-error'];
    this.snackBar.openFromComponent(AlertComponent, {
      ...this.config,
      data: {
        message,
        type: AlertType.ERROR,
      },
    });
  }
}
