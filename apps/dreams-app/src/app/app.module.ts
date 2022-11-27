import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

import { EntityModule } from '@dreams/entity';
import { PostEditComponent } from './entity/post/post-edit/post-edit.component';
import { PostDetailsComponent } from './entity/post/post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    PostEditComponent,
    PostDetailsComponent,
  ],
  imports: [AppRoutingModule, FormsModule, NgbModule, BrowserModule, EntityModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
