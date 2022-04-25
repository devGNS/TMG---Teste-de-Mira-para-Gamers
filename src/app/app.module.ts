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
import { FlexLayoutModule } from '@angular/flex-layout';
import { GameComponent } from './pages/game/game.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

const routes: Routes = [
  {path: '', redirectTo: 'game', pathMatch: 'full'},
  {path: 'game', component: GameComponent },
  {path: 'login', component: LoginComponent },
  {path: 'cadastro', component: CadastroComponent },
  {path: '**', redirectTo: 'game'},
]
@NgModule({
  declarations: [
    AppComponent,HeaderComponent, GameComponent, LoginComponent, CadastroComponent
  ],
  imports: [
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
    FlexLayoutModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
