import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class GitHubService {
    private _clientId = '0e0a23e463a58f7fb8f8';
    private _clientSecret = 'a925d0fc86d1330608a7d812c8c745998afa10ad';
    private _baseApiUrl = "http://api.github.com/users/";

    constructor(private _http: Http) {
        console.log("Github service");
    }

    getUserAndRepos(userName:string){
        return Observable.forkJoin(
            this._http.get(this._baseApiUrl + userName + '?client_id='+ this._clientId + '&client_secret' + this._clientSecret).map(res => res.json()),
            this._http.get(this._baseApiUrl + userName + '/repos?client_id='+ this._clientId + '&client_secret' + this._clientSecret).map(res => res.json())
        );
    }
}