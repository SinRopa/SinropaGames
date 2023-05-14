import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameDisplayComponent } from './game-display/game-display.component';
import { KickComponent } from './kick/kick.component';


@NgModule({
  declarations: [
    AppComponent,
    GameDisplayComponent,
    KickComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
