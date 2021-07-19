import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthServiceGuard } from "src/services/auth-service.guard";
import { BookingComponent } from "./booking/booking.component";
import { LoginComponent } from "./login/login.component";
import { UtcComponent } from "./utc/utc.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'bookings',
        component: BookingComponent,
        canActivate: [AuthServiceGuard]
    },
    {
        path: 'utc',
        component: UtcComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}