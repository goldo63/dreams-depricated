import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoggedInAuthGuard } from './auth.guards';
import { httpInterceptorProviders } from './auth.interceptor';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//import { UtilUIModule } from '@dreams/utility';
import { SaveEditedWorkGuard } from './auth.guards';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    LoggedInAuthGuard,
    SaveEditedWorkGuard,
    AuthService,
    httpInterceptorProviders,
  ],
})
export class AuthUIModule {}
