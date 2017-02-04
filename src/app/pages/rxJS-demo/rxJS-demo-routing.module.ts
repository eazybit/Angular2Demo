/**
 * Created by yxzhang on 2/1/17.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RxJSDemoComponent } from './rxJS-demo.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'rxjs-demo', component: RxJSDemoComponent }
  ])],
  exports: [RouterModule]
})
export class RxJSDemoRoutingModule {}
