import { Routes } from '@angular/router';

import { NotfoundComponent } from './404/not-found.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '404',
        component: NotfoundComponent
      },
    ]
  }
];
