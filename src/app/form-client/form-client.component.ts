import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClientserviceService } from '../clientservice.service';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

newClientForm = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private formService: ClientserviceService) { }


  ngOnInit() {}
  onSubmit() {
    this.formService
    .addClient(this.newClientForm.value)
    .subscribe(h => console.log(h));
  }
}
