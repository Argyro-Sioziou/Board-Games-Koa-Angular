import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('@modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    ]
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}