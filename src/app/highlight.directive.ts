import { Directive,ElementRef,Input,HostListener } from "@angular/core";

@Directive({selector:'[appHighLight]'})

export class HighLightDirective{
   @Input('appHighLight') color:string;
   @Input() defaultColor:string;
    constructor(private el:ElementRef){
    }
   @HostListener('mouseenter') onMouseEnter(){
       console.log(this.color)
       console.log(this.defaultColor)
      this.el.nativeElement.style.backgroundColor=this.color||'red';
    }
    @HostListener('mouseleave') onMouseLeave(){
      this.el.nativeElement.style.backgroundColor=null;
    }
}
