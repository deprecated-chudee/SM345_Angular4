import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { TestService } from './services/test/test.service';
import { AdminUserService } from './services/admin-user/admin-user.service';

import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/navigate/header/header.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { DashboardComponent } from './components/navigate/dashboard/dashboard.component';
import { ManualComponent } from './components/navigate/manual/manual.component';
import { NoticesComponent } from './components/navigate/notices/notices.component';
import { MentoringsComponent } from './components/navigate/mentorings/mentorings.component';
import { QuestionsComponent } from './components/navigate/questions/questions.component';
import { UserComponent } from './components/navigate/user/user.component';
import { AdminComponent } from './components/navigate/admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { AdminUserComponent } from './components/navigate/admin/admin-user/admin-user.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

// Imports Material Modules
import {
  MdSidenavModule, MdCardModule,
  MdToolbarModule,
  MdButtonModule,
  MdCheckboxModule,
  MdIconModule,
  MdListModule,
  MdTabsModule,
  MdGridListModule,
  MdTableModule,
  MdSortModule,
  MdChipsModule,
  MdInputModule,
  MdDatepickerModule, MdNativeDateModule,
} from '@angular/material';

import { AdminMentoringSettingComponent } from './components/navigate/admin/admin-mentoring-setting/admin-mentoring-setting.component';
import { AdminReportComponent } from './components/navigate/admin/admin-report/admin-report.component';
import { AdminMentoringComponent } from './components/navigate/admin/admin-mentoring/admin-mentoring.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'manual', component: ManualComponent},
  { path: 'notices', component: NoticesComponent},
  { path: 'mentorings', component: MentoringsComponent},
  { path: 'questions', component: QuestionsComponent},
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigateComponent,
    DashboardComponent,
    ManualComponent,
    NoticesComponent,
    MentoringsComponent,
    QuestionsComponent,
    UserComponent,
    AdminComponent,
    LoginComponent,
    AdminUserComponent,
    AdminMentoringSettingComponent,
    AdminReportComponent,
    AdminMentoringComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdSidenavModule, MdCardModule,
    MdToolbarModule,
    MdButtonModule,
    MdChipsModule,
    MdIconModule,
    MdListModule,
    MdTabsModule,
    MdTableModule,
    MdGridListModule,
    MdSortModule,
    HttpModule,
    MdInputModule,
    MdCheckboxModule,
    MdDatepickerModule, MdNativeDateModule,
    RouterModule.forRoot(routes),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [
    AuthGuard,
    TestService,
    AdminUserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }