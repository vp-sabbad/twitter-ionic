import {
  Directive,
  Renderer,
  ElementRef
} from '@angular/core';

@Directive({
  selector : '[focuser]'
})
export class Focuser {
  constructor(public renderer: Renderer, public elementRef: ElementRef) {}

  ngOnInit() {
    console.log("focuser");
    //search bar is wrapped with a div so we get the child input
    const searchInput = this.elementRef.nativeElement.querySelector('input');
    setTimeout(() => {
      //delay required or ionic styling gets finicky
      this.renderer.invokeElementMethod(searchInput, 'focus', []);
    }, 0);
  }
}
