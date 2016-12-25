import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../github/github.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any;
  repos: any[];
  userName:string = "";
  errorOccured: boolean = false;
  constructor(private _gitHubService: GitHubService) {
    this.user = false;
  }

  searchUser() {
    this.user = "";
    this.repos = [];
    // this._gitHubService.getUser(this.userName).subscribe(user => {
    //   this.user = user;
    // });

    // this._gitHubService.getRepos(this.userName).subscribe(repos => {
    //   this.repos = repos;
    // })
    this._gitHubService.getUserAndRepos(this.userName)
      .subscribe(data => {
        this.errorOccured = false;
          this.user = data[0];
          this.repos = data[1];
      })
      
  }
}
