import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UrlListComponent } from './url-list/url-list.component';
import { UrlItemComponent } from './url-item/url-item.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

import { UrlHandlerService } from './core/url-handler.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocalStorageService } from './core/local-storage.service';
import {JwtInterceptor} from './core/jwt.interceptor';

import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UrlListComponent,
    UrlItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [UrlHandlerService, HttpClientModule, LocalStorageService,   {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
