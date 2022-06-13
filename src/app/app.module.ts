import { AlertComponent } from './pages/alert/alert.component';
import { UserService } from './../services/user.service';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSliderModule} from '@angular/material/slider';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import { CoreModule, FlexLayoutModule } from '@angular/flex-layout';
import { GameComponent } from './pages/game/game.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { EstatisticasComponent } from './pages/estatisticas/estatisticas.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
const routes: Routes = [
  {path: '', redirectTo: 'game', pathMatch: 'full'},
  {path: 'game', component: GameComponent },
  {path: 'login', component: LoginComponent },
  {path: 'cadastro', component: CadastroComponent },
  {path: 'estatisticas', component: EstatisticasComponent},
  {path: '**', redirectTo: 'game'},
]
@NgModule({
  declarations: [
    AppComponent,HeaderComponent, GameComponent, LoginComponent, CadastroComponent, EstatisticasComponent,AlertComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSliderModule,
    MatDividerModule,
    MatInputModule,
    MatSnackBarModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes),

  ],
  providers: [HttpClientModule, {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
