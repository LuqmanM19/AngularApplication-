import { Routes } from '@angular/router';

import { DatatableComponent } from './data-table/data-table.component';
export const TablesRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'datatable',
                component: DatatableComponent,
                data: {
                    title: 'Data Table',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Data Table' }
                    ]
                }
            },
        ]
    }
];
