import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ClientComponent } from './client/client.component';
import {RouterModule, Routes} from '@angular/router';
import { from } from 'rxjs';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

// const appRoutes: Routes = [
//   { path: 'client', component: ClientComponent
// },
// {path: 'project', component: ProjectComponent}
// ];



@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ClientComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
