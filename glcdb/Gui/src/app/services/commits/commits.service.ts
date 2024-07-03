import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Commit } from './commit.dto';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CommitsService {

  constructor(private http:HttpClient) {  }

  getCommits(projectId: string):Observable<Commit[]> {
    const route: string = '/gitlabcidashboard/api/' + projectId + '/commits/';
    return this.http.get<Commit[]>(route);
  }

  getSingleCommit(projectId: string, branchName: string):Observable<Commit> {
    const route: string = '/gitlabcidashboard/api/' + projectId + '/commits/' + branchName;
    return this.http.get<Commit>(route);
  }
}
