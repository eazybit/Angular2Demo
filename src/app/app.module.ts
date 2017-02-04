import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { Angular2DemoModule } from './pages/angular2-demo/angular2-demo.module';
import { RxJSDemoModule } from './pages/rxJS-demo/rxJS-demo.module';
import { NgRxDemoModule } from './pages/ngRx-demo/ngRx-demo.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    Angular2DemoModule,
    RxJSDemoModule,
    NgRxDemoModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
