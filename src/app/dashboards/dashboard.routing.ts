import { Routes } from '@angular/router';

import { Dashboard2Component } from './dashboard2/dashboard2.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard2',
        component: Dashboard2Component,
        data: {
          title: 'Dashboard',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
          ]
        }
      },
    ]
  }
];
