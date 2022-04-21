import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConstants } from 'src/app/core/constants';
import { SignInComponent } from './sign-in.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import {MatCheckboxModule} from '@angular/material/checkbox';

const routes: Routes = [
  {
    path: RoutesConstants.INDEX,
    component: SignInComponent
  }
];

const MATERIAL: any[] = [
  MatButtonModule,
  MatIconModule,
  MatBadgeModule,
  MatCheckboxModule
];

@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    MATERIAL,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SignInModule { }
