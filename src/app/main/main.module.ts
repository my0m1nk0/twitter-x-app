import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './shared/components/sidebar.component';
import { HeaderComponent } from './shared/components/header.component';
import { FollowBarComponent } from './shared/components/follow-bar.component';
import { AvatarComponent } from './shared/components/avatar.component';
import { LoaderComponent } from './shared/components/loader.component';
import { LoginModalComponent } from './shared/auth/login-modal/login-modal.component';
import { RegisterModalComponent } from './shared/auth/register-modal/register-modal.component';
import { ModalComponent } from './shared/components/modal.component';
import { ButtonComponent } from './shared/components/button.component';
import { SidebarItemsComponent } from './shared/components/sidebar-items.component';


@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    FollowBarComponent,
    AvatarComponent,
    LoaderComponent,
    LoginModalComponent,
    RegisterModalComponent,
    ModalComponent,
    ButtonComponent,
    SidebarItemsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
