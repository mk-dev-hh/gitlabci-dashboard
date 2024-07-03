import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { AppRouting } from './app.routing';
import { Error404Component } from './components/error404.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from './classes/HttpInterceptors/ErrorInterceptor';
import { CacheInterceptor } from './classes/HttpInterceptors/CacheInterceptor';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {FrameModule} from '../frame/frame.module';
import { filter } from 'rxjs/operators';
import { PipelinesModule } from '../pipelines/pipelines.module';
import { SettingsModule  } from '../settings/settings.module';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    FrameModule,
    AppRouting,
    DashboardModule,
    PipelinesModule,
    SettingsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private route: ActivatedRoute, private titleService: Title, private router: Router) {}
}
