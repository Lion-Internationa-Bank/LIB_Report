import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppModule } from './app.module';
import {LoginLayoutComponent} from './common/components/login-layout/login-layout.component'

export const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:"full"},
  
  { path:'login',
    component:LoginLayoutComponent,
    pathMatch:"full",
    children: [
      {
        path:'',
        loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
      }
    ]
  },
  { path:'changepassword',
    component:LoginLayoutComponent,
    pathMatch:"full",
    children: [
      {
        path:'',
        loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
      }
    ]
  },
  {
    path: '',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
  },
  {
    path: 'denied',
    loadChildren: () => import('./common/components/denied/denied.module').then(m => m.DeniedModule)
  },


  { path: '**', loadChildren: () => import('./common/components/not-found/not-found.module').then(m => m.NotFoundModule) },
];


export const routing: ModuleWithProviders<AppModule> = RouterModule.forRoot(routes, {
});
