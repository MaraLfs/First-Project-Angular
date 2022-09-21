import { Directive, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') myBackgroundcolor:string = '';
  @HostBinding('style.fontSize') myFontSize:string = '';

  constructor() { }

  ngOnInit(): void {
    
  }

  @HostListener('mouseenter') MouseEnterEvent (EventData:Event) {
    this.myBackgroundcolor = 'yellow';
     this.myFontSize = '20px';
  }
  @HostListener('mouseleave') MouseLeaveEvent (EventData:Event) {
    this.myBackgroundcolor = 'transparent';
    this.myFontSize = '15px'
  }


}
