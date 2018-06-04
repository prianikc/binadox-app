import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStatusColor]'
})
export class StatusColorDirective {

  constructor(el: ElementRef) {
    console.log(el);

   }

}
