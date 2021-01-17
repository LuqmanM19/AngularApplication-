import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { TablesRoutes } from './tables.routing';
import { DatatableComponent } from './data-table/data-table.component';

@NgModule({
    imports: [
        RouterModule.forChild(TablesRoutes),
        CommonModule,
        NgxDatatableModule,
    ],
    declarations: [
        DatatableComponent,
    ]
})
export class TablesModule { }
