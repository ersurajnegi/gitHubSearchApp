import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgProgressModule } from 'ng2-progressbar';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { GitHubService } from './github/github.service';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgProgressModule
  ],
  providers: [GitHubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
