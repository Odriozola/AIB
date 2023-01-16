import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppLogInComponent } from './components/app-log-in/app-log-in.component';
import { PlantillaComponent } from './components/plantilla/plantilla.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLogInComponent,
    PlantillaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
