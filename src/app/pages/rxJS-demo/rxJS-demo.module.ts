/**
 * Created by yxzhang on 2/1/17.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RxJSDemoRoutingModule } from './rxJS-demo-routing.module';

import { RxJSDemoComponent } from './rxJS-demo.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RxJSDemoRoutingModule
  ],
  declarations: [
    RxJSDemoComponent
  ],
  exports: [
    RxJSDemoComponent
  ]
})
export class RxJSDemoModule {}
