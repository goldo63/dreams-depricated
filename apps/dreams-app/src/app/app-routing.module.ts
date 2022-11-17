import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LayoutComponent } from './layout/layout.component'
import { HomeComponent } from './pages/home/home.component'
import { AboutComponent } from './pages/about/about.component'


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', pathMatch: 'full', component: HomeComponent },
      { path: 'about', pathMatch: 'full', component: AboutComponent },
    //   {
    //     path: 'users',
    //     loadChildren: () =>
    //       import(/* webpackChunkName: "user.module" */ '@cswp/feature').then(
    //         (m) => m.UserModule,
    //         () => {
    //           throw { loadChunkError: true }
    //         }
    //       )
    //   },
    //   {
    //     path: 'meals',
    //     loadChildren: () =>
    //       import(/* webpackChunkName: "meal.module" */ '@cswp/feature').then(
    //         (m) => m.MealModule,
    //         () => {
    //           throw { loadChunkError: true }
    //         }
    //       )
    //   }
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
