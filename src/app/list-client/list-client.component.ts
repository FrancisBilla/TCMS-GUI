import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientserviceService } from '../clientservice.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../client';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  results = [];
  constructor(
    private clientservice: ClientserviceService,
    private router: Router
    ) { }
    clientObservable: Observable<Client[]>;
    retrievedClients: Array<Client> = [];

  ngOnInit() {
    this.clientservice.getClient().subscribe(clients => {
       this.retrievedClients = clients;
      // console.log(client);
        });
  }









//   clients =[
//     {
//       name: 'francis',
//   phone:'023455',
// email: 'gaarea@mail',
// address:'east legon'
// },
// {
//   name: 'me',
// phone:'023455',
// email: 'gaarea@mail',
// address:'east legon'
// },
//   ]
}

