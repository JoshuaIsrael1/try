import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private URL = 'https://bocxycrmapi.bocxy.com'
  private LURL = 'http://localhost:8002'
  constructor(
    private http: HttpClient
  ) { }

  sendMail(payLoad: any): Observable<any> {
    return this.http.post(`${this.URL}/api/email-controller/sendTemplateEmail?name=${payLoad.name}&mobileNo=${payLoad.phone}&mail=${payLoad.email}&message=${payLoad.message}`, {})
  }

}
