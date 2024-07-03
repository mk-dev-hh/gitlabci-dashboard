import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Configuration } from './configuration.dto';
import { Observable } from 'rxjs';

const httpOptions = {
headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
})
}

@Injectable({
providedIn: 'root'
})
export class ConfigurationService {

    constructor(private http:HttpClient) {  }

     getConfiguration():Observable<Configuration> {
        const route: string = '/gitlabcidashboard/api/configuration/';
        return this.http.get<Configuration>(route);
    }

    saveUserConfiguration(config: Configuration): Observable<any>{
      const route: string = '/gitlabcidashboard/api/configuration/';
      return this.http.post<any>(route, config, httpOptions);
    }

}
