import { ThisReceiver } from '@angular/compiler';
import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[overUp]' //el nombre es personalizado
})
export class OverMouseDirective implements OnInit{

  constructor(private me:ElementRef) {
  }

  @Input() color = 'orange';

  @Output() sendMessage = new EventEmitter<any>()


  @HostListener('mouseenter') onMouseEnter(){
    console.log('entro al elemento' + event);
    this.me.nativeElement.style.backgroundColor = 'yellow';

  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(event:any){
    console.log('ahora salioi del elemento');
    this.me.nativeElement.style.backgroundColor = 'orange';

    this.sendMessage.emit({
      text:'Soy un elemnto del padre',
      x: event.x,
      y: event.y,
    })
  }

  ngOnInit(): void {
    console.log(this.me);
    this.me.nativeElement.style.backgroundColor = this.color;
  }

}
