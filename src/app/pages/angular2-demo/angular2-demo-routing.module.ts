/**
 * Created by yxzhang on 2/1/17.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Angular2DemoComponent } from './angular2-demo.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'angular2-demo', component: Angular2DemoComponent }
  ])],
  exports: [RouterModule]
})
export class Angular2DemoRoutingModule {}
