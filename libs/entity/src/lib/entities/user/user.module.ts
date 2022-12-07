import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { SharedModule } from '../../shared/shared.module'
import * as fromComponents from '.';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlaceholderComponent } from './placeholder/placeholder.component';

const routes: Routes = [
  {
    path: '',
    component: fromComponents.PlaceholderComponent,
    children: [
      {
        path: 'new',
        pathMatch: 'full',
        component: fromComponents.PlaceholderComponent,
      },
      // {
      //   path: ':id',
      //   pathMatch: 'full',
      //   component: fromComponents.UserDetailComponent
      // },
      {
        path: ':id/edit',
        pathMatch: 'full',
        component: fromComponents.PlaceholderComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [...fromComponents.components, PlaceholderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgbModule,
  ],
})
export class UserModule {}
