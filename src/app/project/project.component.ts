import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  projectlist =[
    {
      projectName: 'TBMS',
      description: 'Trading App',
      handler: '@tbms'
    },
      {
        projectName: 'AgriCare',
      description: 'Agrico Tra App',
      handler: '@agrc'
    },
      {
        projectName: 'Telsco',
      description: 'Social App',
      handler: '@tel'
    }
  ]

}
