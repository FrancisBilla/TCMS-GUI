import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientserviceService {

  constructor(private http: HttpClient) { }
  private clientUrl = 'https://boiling-bastion-30474.herokuapp.com';

  getClient(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientUrl + '/clients');
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.clientUrl + '/clients/addAClient', client);
  }
}
