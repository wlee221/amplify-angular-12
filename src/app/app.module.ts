import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiAngularModule } from '@aws-amplify/ui-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
