import {BrowserModule} from '@angular/platform-browser';
import {forwardRef, NgModule} from '@angular/core';

import {HashLocationStrategy,LocationStrategy, PathLocationStrategy} from '@angular/common'


import {AppRoutingModule, routes} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';

import {MatTabsModule} from '@angular/material/tabs';

import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import {  MatInputModule } from "@angular/material/input";
import {  MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import {  MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatStepperModule} from '@angular/material/stepper';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { ArchitectComponent } from './architect/architect.component';
import { GiantsComponent } from './giants/giants.component';
import { AgentComponent } from './agent/agent.component';
import { TestTextComponent } from './test-text/test-text.component';
import { FooterComponent } from './footer/footer.component';
import { ExperienceComponent } from './experience/experience.component';
import { StoryCardComponent } from './story-card/story-card.component';
import { StoriesListComponent } from './stories-list/stories-list.component';
import { StoryImageComponent } from './story-image/story-image.component';
// @ts-ignore
import Typewriter from 't-writer.js';
import { StatusComponent } from './status/status.component';
// @ts-ignore
import {MatGridListModule} from '@angular/material';
import { GalleryComponent } from './gallery/gallery.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewToolbarComponent } from './new-toolbar/new-toolbar.component';
import { ClickOutsideDirective } from './directivesFolder/click-outside.directive';
import { BlogComponent } from './blog/blog.component'
import { RouterModule } from '@angular/router';
import { SwellToolbarComponent } from './swell-toolbar/swell-toolbar.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { PayStoreComponent } from './pay-store/pay-store.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ProfileComponent,
    ArchitectComponent,
    GiantsComponent,
    AgentComponent,
    TestTextComponent,
    FooterComponent,
    ExperienceComponent,
    StoriesListComponent,
    StoryImageComponent,
    StatusComponent,
    GalleryComponent,
    NavBarComponent,
    NewToolbarComponent,
    ClickOutsideDirective,
    BlogComponent,
    SwellToolbarComponent,
    ComingSoonComponent,
    PayStoreComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    AppRoutingModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      useHash: false
    })
    
    

  ],
  providers: [{provide:LocationStrategy, useClass:PathLocationStrategy}],

  bootstrap: [AppComponent]
})
export class AppModule { }
