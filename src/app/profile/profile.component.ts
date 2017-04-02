import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../github/github.service';
import {NgProgressService} from "ng2-progressbar";
@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  user: any;
  repos: any[];
  userName: string = "";
  isLoading: boolean = false;
  errorOccured: boolean = false;
  userNameEmpty:boolean = false;
  constructor(private _gitHubService: GitHubService, private _ngLoading: NgProgressService) {
    this.user = false;
  }

  searchUser() {
    this.user = "";
    this.repos = [];
    
    this.errorOccured = false;
    if (this.userName) {
      this.userNameEmpty = false;
      this.isLoading = true;
      this._ngLoading.start();
      this._gitHubService.getUserAndRepos(this.userName)
        .subscribe(data => {
          this.errorOccured = false;
          this.user = data[0];
          this.repos = data[1];
          this.isLoading = false;
          this._ngLoading.done();
        },
        error => {
          this.isLoading = false;
          this.errorOccured = true;
        })
    }
    else{
      this.userNameEmpty = true;
    }
  }
}
