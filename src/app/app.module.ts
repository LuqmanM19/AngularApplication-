import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    CommonModule,
    LocationStrategy,
    HashLocationStrategy
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ToastrModule } from 'ngx-toastr';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
 

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TokenService } from './table/data-table/token.service';
import {MatTableModule} from '@angular/material/table';
import { WeatherService } from './dashboards/dashboard-components/info-box/weather.service';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelSpeed: 1,
    wheelPropagation: true,
    minScrollbarLength: 20
};

@NgModule({
    declarations: [
        AppComponent,
        SpinnerComponent,
        FullComponent,
        BlankComponent,
        NavigationComponent,
        BreadcrumbComponent,
        SidebarComponent,
        
    ],
    imports: [
        CommonModule,
        MatTableModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        NgbModule,
        ToastrModule.forRoot(),
        SlimLoadingBarModule.forRoot(),
        RouterModule.forRoot(Approutes, { useHash: false }),
        PerfectScrollbarModule,
        Ng2SearchPipeModule,
        NgMultiSelectDropDownModule.forRoot(),
        AgmCoreModule.forRoot({ apiKey: 'AIzaSyBUb3jDWJQ28vDJhuQZxkC0NXr_zycm8D0' })
    ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenService,
            multi: true
        },
        WeatherService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
