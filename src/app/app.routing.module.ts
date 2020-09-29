import { EmployeeDashboardModule } from './modules/employee-dashboard/employee-dashboard.module';
import { RoleComponent } from './layout/role/role.compoent';
import { LoginComponent } from './modules/login-module/login.component';
import {EmployeeModule} from './modules/employee-module/employee.module';
import {EmployeeJobModule} from './modules/employee-job/job.module';

import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { EmployeeComponent } from './modules/employee-module/employee.component';

const appRoutes: Routes = [
 { path: 'login', component: LoginComponent},
   {
    path: ':role',
    component: RoleComponent,
    children: [
      {
        path: 'employee-dashboard',
        loadChildren: () => import('./modules/employee-dashboard/employee-dashboard.module').then(m => m.EmployeeDashboardModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./modules/employee-module/employee.module').then(m => m.EmployeeModule)
      },
      {
        path: 'myjob',
        loadChildren: () => import('./modules/employee-job/job.module').then(m => m.EmployeeJobModule)
      },
      {
        path: 'booking',
        loadChildren: () => import('./modules/employee-booking/booking.module').then(m => m.EmployeeBookingModule)
      },
      {
        path: 'cnlbooking',
        loadChildren: () => import('./modules/employee-cancel-booking/cancel.booking.module').then(m => m.EmployeeCancelBookingModule)
      },
      {
        path: 'progress',
        loadChildren: () => import('./modules/employee-progress/employee.progress.module').then(m => m.EmployeeProgressModule)
      },
      {
        path: 'empdetails',
        loadChildren: () => import('./modules/employee-details/employee.details.module').then(m => m.EmployeeDetailsModule)
      },
      {
        path:'postexample',
        loadChildren: () => import('./modules/post-example/post.module').then(m => m.PostModule)
      }
    ]
  },
{ path: '**', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { preloadingStrategy: '', useHash: true })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    
  ]
})

export class AppRoutingModule { }