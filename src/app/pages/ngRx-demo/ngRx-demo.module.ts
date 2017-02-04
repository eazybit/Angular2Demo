/**
 * Created by yxzhang on 2/1/17.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NgRxDemoRoutingModule } from './ngRx-demo-routing.module';
import { NgRxDemoComponent } from './ngRx-demo.component';
import { peopleReducer } from './people.reducer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgRxDemoRoutingModule,
    StoreModule.provideStore({ people: peopleReducer }),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 100
    })
  ],
  declarations: [
    NgRxDemoComponent
  ],
  exports: [
    NgRxDemoComponent
  ]
})
export class NgRxDemoModule {}
