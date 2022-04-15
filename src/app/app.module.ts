import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSliderModule} from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GameComponent } from './pages/game/game.component';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent, GameComponent, GameComponent
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
    FlexLayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
