import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { LoginRoutes } from './login/login-routing.module';
import { UsersRoutes } from './users/users-routing.module';
import { OrdersRoutes } from './orders/orders.routing.module';
export const routes: Routes = [
	{ 
		path: '', 
		redirectTo: '/login', 
		pathMatch: 'full' 
	},
	...LoginRoutes,
	...UsersRoutes,
	...OrdersRoutes
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}