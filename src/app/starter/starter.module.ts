import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { StarterComponent } from './starter.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Tips Page',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Tips Page' }
      ]
    },
    component: StarterComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [StarterComponent]
})
export class StarterModule {}