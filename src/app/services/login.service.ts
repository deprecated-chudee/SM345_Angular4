import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Login } from '../interfaces/login';

@Injectable()
export class LoginService {
  public token: string;
  private loginUrl = 'https://www.chudee.world/api/auth/login';
  private checkUrl = 'https://www.chudee.world/api/auth/check';
  
  constructor(private http: Http) {
      // set token if saved in local storage
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.token = currentUser && currentUser.token;
  }

  login(id: string, password: string): Promise<boolean> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(
            this.loginUrl, 
            JSON.stringify({ id: id, password: password }), 
            {headers: headers}
        )
        .toPromise()
        // async & await
        .then( async (response: Response) => { 
            let token = response.json() && response.json().token
            if (token) {
                // set token property
                this.token = token;
              
                const checked = await this.check(this.token).then(res => {
                  return res.json().info
                })
                // store id and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ user_name: checked.user_name, user_id: checked.user_id, token: token }));        
            
                // return true to indicate successful login
                return true;
            } else {
                // return false to indicate failed login
                return false;
            }
          })
        .catch(this.handleError)
  }

  check(token: string): Promise<any> {
    const headers = new Headers();
    headers.append('x-access-token', token);
    return this.http.get(
      this.checkUrl,
      {headers: headers}
    ).toPromise()
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
