/**
 * Created by yxzhang on 2/1/17.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Angular2DemoRoutingModule } from './angular2-demo-routing.module';

import { Angular2DemoComponent } from './angular2-demo.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    Angular2DemoRoutingModule
  ],
  declarations: [
    Angular2DemoComponent
  ],
  exports: [
    Angular2DemoComponent
  ]
})
export class Angular2DemoModule {}
