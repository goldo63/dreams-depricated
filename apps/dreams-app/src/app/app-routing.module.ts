import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LayoutComponent } from './layout/layout.component'
import { HomeComponent } from './pages/home/home.component'
import { AboutComponent } from './pages/about/about.component'
import { UserModule } from '@dreams/entity'

// import { PostEditComponent } from './entity/post/post-edit/post-edit.component'
// import { PostDetailsComponent } from './entity/post/post-details/post-details.component'

//import { UserDetailsComponent } from './entity/user/user-details/user-details.component'
// import { UserEditComponent } from './entity/user/user-edit/user-edit.component'
// import { CompanyDetailsComponent } from './entity/company/company-details/company-details.component'



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', component: HomeComponent },
      { path: 'home', pathMatch: 'full', redirectTo: '' },
      { path: 'about', pathMatch: 'full', component: AboutComponent },

      {
        path: 'users',
        loadChildren: () =>
          import('@dreams/entity').then(
            (m) => m.UserModule,
            () => {
              throw { loadChunkError: true }
            }
          )
      },


      // { path: 'post/create', pathMatch: 'full', component: PostEditComponent},
      // { path: 'post/add', pathMatch: 'full', component: PostEditComponent},
      // { path: "post/:id", pathMatch: "full", component: PostDetailsComponent},
      // { path: "post/:id/edit", pathMatch: "full", component: PostEditComponent},

      // //{ path: 'user/:id', pathMatch: 'full', component: UserDetailsComponent}
      // { path: 'user/:id/edit', pathMatch: 'full', component: UserEditComponent},
      // { path: 'user/add', pathMatch: 'full', component: UserEditComponent},

      // // { path: 'company/:id/edit', pathMatch: 'full', component: CompanyEditComponent},
      // // { path: 'company/add', pathMatch: 'full', component: CompanyEditComponent},
      // { path: 'company/:id', pathMatch: 'full', component: CompanyDetailsComponent},
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
