import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrawingComponent } from './drawing/drawing.component';

import { DrawingService } from './drawing/drawing.service';

@NgModule({
  declarations: [
    AppComponent,
    DrawingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DrawingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
