import { NgModule } from '@angular/core';
import { Comp1Component } from './comp-1/comp-1.component';
import { Comp2Component } from './comp-2/comp-2.component';

@NgModule({
  declarations: [Comp1Component, Comp2Component],
  imports: [],
  exports: [Comp1Component, Comp2Component],
})
export class ComponentsModule {}
