import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent} from './employee/employee.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from "./service/auth-guard.service";

const routes: Routes = [
  { path:'', component: EmployeeComponent, canActivate:[AuthGuardService]},
  { path:'newemployee', component: NewEmployeeComponent, canActivate:[AuthGuardService]},
  { path:'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
