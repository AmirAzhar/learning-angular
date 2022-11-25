import { DetailsComponent } from './details/details.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { SuccessComponent } from './success/success.component';
import { WarningComponent } from './warning/warning.component';

@NgModule({
  declarations: [
    DetailsComponent,
    AppComponent,
    WarningComponent,
    SuccessComponent,
    FormComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
