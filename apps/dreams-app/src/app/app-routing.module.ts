import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LayoutComponent } from './layout/layout.component'
import { HomeComponent } from './pages/home/home.component'
import { AboutComponent } from './pages/about/about.component'

import { PostEditComponent } from './entity/post/post-edit/post-edit.component'
import { PostDetailsComponent } from './entity/post/post-details/post-details.component'


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', component: HomeComponent },
      { path: 'home', pathMatch: 'full', redirectTo: '' },
      { path: 'about', pathMatch: 'full', component: AboutComponent },

      { path: 'post/create', pathMatch: 'full', component: PostEditComponent},
      { path: 'post/add', pathMatch: 'full', component: PostEditComponent},
      
      {
        path: "post/:id",
        pathMatch: "full",
        component: PostDetailsComponent,
      },
      {
        path: "post/:id/edit",
        pathMatch: "full",
        component: PostEditComponent,
      },
    ]
  },
  // { path: 'login', pathMatch: 'full', component: LoginComponent },
  // { path: 'register', pathMatch: 'full', component: RegisterComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
