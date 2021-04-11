import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { TablesComponent } from './tables';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table'
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    RouterModule.forRoot([
      {path: 'forms', component: FormComponent},
      {path: 'tables', component: TablesComponent},
      ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
