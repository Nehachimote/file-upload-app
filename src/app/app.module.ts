import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HomeComponent } from './home/home.component';
import { SanctionPageComponent } from './sanction/sanction.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    HomeComponent,
    SanctionPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'file-upload', component: FileUploadComponent},
      {path: 'sanction', component: SanctionPageComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

