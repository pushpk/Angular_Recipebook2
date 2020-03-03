import { Directive, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]',
})
export class DropdownDirective { 

    constructor(private elemRef: ElementRef, private renderer: Renderer2) {}

    isOpen = false;

    @HostListener('click') toggleOpen(eventData : Event)    {

         if (!this.isOpen) {
            this.renderer.setAttribute(this.elemRef.nativeElement, 'class', 'open');
        } else {
            this.renderer.removeAttribute(this.elemRef.nativeElement, 'class');
        } 

        this.isOpen = !this.isOpen
    }

}
