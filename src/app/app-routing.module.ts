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
import { ExperienceComponent } from './experience/experience.component';
import { StoryCardComponent } from './story-card/story-card.component';
import { StatusComponent } from './status/status.component';
import { GalleryComponent } from './gallery/gallery.component';
import { StoriesListComponent } from './stories-list/stories-list.component';
import { BlogComponent } from './blog/blog.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { PayStoreComponent } from './pay-store/pay-store.component';

export const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'pay',
    component: PayStoreComponent
  },
  // {
  //   path: 'about',
  //   component: AboutComponent
  // },
  // {
  //   path: 'profile',
  //   component: ProfileComponent
  // },
  // {
  //   path: 'architect',
  //   component: ArchitectComponent
  // },
  // {
  //   path: 'giants',
  //   component: GiantsComponent
  // },
  // {
  //   path: 'agent',
  //   component: AgentComponent
  // },
  // {
  //   path: 'testText',
  //   component: TestTextComponent
  // },
  // {
  //   path: 'experience',
  //   component: ExperienceComponent
  // },
  // {
  //   path: 'story-card',
  //   component: StoryCardComponent
  // },
  // {
  //   path: 'stories-list',
  //   component: StoriesListComponent
  // },
  // {
  //   path: 'status',
  //   component: StatusComponent
  // },
  // {
  //   path: 'gallery',
  //   component: GalleryComponent
  // },
  {
     path: 'blog',
     component: BlogComponent
  },
  
  {
    path: 'coming',
    component: ComingSoonComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    useHash: false
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}
