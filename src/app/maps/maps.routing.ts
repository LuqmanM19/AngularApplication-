import { Routes } from '@angular/router';

import { MapgoogleComponent } from './map-google/map-google.component';

export const MapRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'rainfall',
        component: MapgoogleComponent,
        data: {
          title: 'Rainfall Distribution',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Rainfall Distribution' }
          ]
        }
      }
    ]
  }
];
