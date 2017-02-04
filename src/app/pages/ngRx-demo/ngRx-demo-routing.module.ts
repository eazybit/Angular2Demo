/**
 * Created by yxzhang on 2/1/17.
 */
/**
 * Created by yxzhang on 2/1/17.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgRxDemoComponent } from './ngRx-demo.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'ngrx-demo', component: NgRxDemoComponent }
  ])],
  exports: [RouterModule]
})
export class NgRxDemoRoutingModule {}
