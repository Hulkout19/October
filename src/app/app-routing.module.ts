import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AgentComponent } from './agent/agent.component';
import { AppComponent } from './app.component';
import { ArchitectComponent } from './architect/architect.component';
import { ContactComponent } from './contact/contact.component';
import { GiantsComponent } from './giants/giants.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { TestTextComponent } from './test-text/test-text.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'architect',
    component: ArchitectComponent
  },
  {
    path: 'giants',
    component: GiantsComponent
  },
  {
    path: 'agent',
    component: AgentComponent
  },
  {
    path: 'testText',
    component: TestTextComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
