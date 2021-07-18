import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BookingComponent } from './booking/booking.component';
import { UtcComponent } from './utc/utc.component';
import { LoginService } from 'src/services/login.service';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/utils/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookingService } from 'src/services/booking.service';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorIntlEsp } from './shared/utils/matPaginatorIntlEsp';
import { HeaderComponent } from './shared/components/header/header.component';
import { AuthServiceGuard } from 'src/services/auth-service.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookingComponent,
    UtcComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    BookingService,
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlEsp },
    AuthServiceGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
