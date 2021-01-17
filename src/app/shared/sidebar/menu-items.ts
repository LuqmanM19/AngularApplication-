import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '',
        title: 'Tables',
        icon: 'mdi mdi-dots-horizontal',
        class: 'nav-small-cap',
        extralink: true,
        submenu: []
    },
    {
        path: '/tables/datatable',
        title: 'Data Tables',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '',
        title: 'Pages',
        icon: 'mdi mdi-dots-horizontal',
        class: 'nav-small-cap',
        extralink: true,
        submenu: []
    },
    {
   
        path: '/starter',
        title: 'Tips',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
            
    },
    {
        path: '',
        title: 'Personal',
        icon: 'mdi mdi-dots-horizontal',
        class: 'nav-small-cap',
        extralink: true,
        submenu: []
    },
    {      
        path: '/dashboard/dashboard2',
        title: 'Dashboard ',
        icon: '',
        class: '',
        extralink: false,
        submenu: [] 
    },
    {
        path: '',
        title: 'Rainfall Distribution',
        icon: 'mdi mdi-dots-horizontal',
        class: '',
        extralink: true,
        submenu: []
    },
    {
        path: '/maps/rainfall',
        title: 'Rainfall',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '',
        title: 'Apps',
        icon: 'mdi mdi-dots-horizontal',
        class: 'nav-small-cap',
        extralink: true,
        submenu: []
    },
    {
        path: '/apps/fullcalendar',
        title: 'Calendar',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
    },
];
