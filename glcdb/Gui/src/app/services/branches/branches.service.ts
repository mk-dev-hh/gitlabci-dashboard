import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Branch } from './branch.dto';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  constructor(private http:HttpClient) {  }

  getBranches(projectId: string):Observable<Branch[]> {
    const route: string = '/gitlabcidashboard/api/' + projectId + '/branches/';
    return this.http.get<Branch[]>(route);
  }
}
