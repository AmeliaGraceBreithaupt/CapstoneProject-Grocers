import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeIndexComponent } from './Employee/employee-index/employee-index.component';
import { SendRequestComponent } from './Employee/employee-index/send-request/send-request.component';
import { UnlockUsersComponent } from './Employee/employee-index/unlock-users/unlock-users.component';
import { UpdateOrderStatusComponent } from './Employee/employee-index/update-order-status/update-order-status.component';
import { EditProdileComponent } from './User/user-index/edit-profile/edit-prodile.component';
import { AdminIndexComponent } from './Admin/admin-index/admin-index.component';
import { GenerateReportComponent } from './Admin/admin-index/generate-report/generate-report.component';
import { ViewRequestsComponent } from './Admin/admin-index/view-requests/view-requests.component';
import { SignInComponent as AdminSignin } from './Admin/sign-in/sign-in.component';
import { EmployeeSignInComponent as EmployeeSignin } from './Employee/sign-in/sign-in.component';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './User/sign-up/sign-up.component';
import { ViewItemsComponent } from './User/user-index/cart/view-items/view-items.component';
import { SigninComponent as UserSignin } from './User/signin/signin.component';
import { SelectItemsComponent } from './User/user-index/cart/select-items/select-items.component';
import { CartComponent } from './User/user-index/cart/cart.component';
import { MyAuthGuard } from './myauthguard';
import { OrderStatusComponent } from './User/user-index/order-status/order-status.component';
import { UserIndexComponent } from './User/user-index/user-index.component';
import { RaiseTicketComponent } from './User/raise-ticket/raise-ticket.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'admin', component: AdminSignin },
  { path: 'shopper', component: UserSignin },
  { path: 'employee', component: EmployeeSignin },
  {
    path: 'admin-index',
    component: AdminIndexComponent,
    canActivate: [MyAuthGuard],
  },
  {
    path: 'admin-index/requests',
    component: ViewRequestsComponent,
    canActivate: [MyAuthGuard],
  },
  {
    path: 'admin-index/report',
    component: GenerateReportComponent,
    canActivate: [MyAuthGuard],
  },
  { path: 'employeeDashboard', component: EmployeeIndexComponent },
  { path: 'editEmployeeProfile', component: EditProdileComponent },
  { path: 'send-request', component: SendRequestComponent },
  { path: '\nlockUsers', component: UnlockUsersComponent },
  { path: 'updateOrderStatus', component: UpdateOrderStatusComponent },
  {
    path: 'admin-index/report',
    component: GenerateReportComponent,
    canActivate: [MyAuthGuard],
  },
  { path: 'selectItems/cart', component: ViewItemsComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'selectItems', component: SelectItemsComponent },
  {path:'purchaseComplete',component:CartComponent},
  { path: 'user-index', component: UserIndexComponent},
  { path: 'user-index/cart', component: CartComponent},
  { path: 'user-index/edit-profile', component: EditProdileComponent},
  { path: 'user-index/order-status', component: OrderStatusComponent},
  { path: 'user-index/view-item', component: ViewItemsComponent},
  { path: 'user-index/raise-ticket', component: RaiseTicketComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
