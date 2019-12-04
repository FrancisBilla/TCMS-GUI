import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  client = new FormControl(' ');
  constructor() { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.clientForm.value);
  }

  ngOnInit() {
  }


}

