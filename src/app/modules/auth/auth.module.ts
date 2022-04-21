import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';

// const MATERIAL = [
// ];

@NgModule({
  declarations: [
    AuthLayoutComponent
  ],
  imports: [
    // MATERIAL,
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
