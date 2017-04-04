import {Component, Input, ElementRef, HostListener} from '@angular/core';


@Component({
  selector: 'backtop',
  template: '<div id="backtop" class="{{theme}} {{class}}"><button><i class="fa fa-chevron-up"></i></button></div>',
   styleUrls: ['ng2-backtop.css']

})
export class BacktopDirective {
  @Input('scrollspeed') speed;
  @Input('buttontheme') theme;
  class: string;
constructor(private el: ElementRef) {
    this.el = el;
    const self = this;
    window.addEventListener('scroll', function () {
                if (window.scrollY >= 200) {
                    self.class = 'show';
                } else {
                    self.class = '';
                }
            });
}


@HostListener('click', ['$event.target']) onClick(btn) {
    this.smoothScroll();
    this.class = '';
  }



currentYPosition() {
                if (self.pageYOffset) {
                  return self.pageYOffset;
                }
                if (document.documentElement && document.documentElement.scrollTop) {
                  return document.documentElement.scrollTop;
                }
                if (document.body.scrollTop) {
                  return document.body.scrollTop;
                }
                return 0;
            };
 smoothScroll() {
                const startY = this.currentYPosition();
                const stopY = 0;
                const distance = stopY > startY ? stopY - startY : startY - stopY;
                if (distance < 100) {
                    scrollTo(0, stopY);
                    return;
                }
                const speed = this.speed  ? Math.round(this.speed / 100) : 6 ;
                const step = Math.round(distance / 25);
                let leapY = stopY > startY ? startY + step : startY - step;
                let timer = 0;
                if (stopY > startY) {
                    for (let i = startY; i < stopY; i += step) {
                        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                        leapY += step;
                        if (leapY > stopY) {
                          leapY = stopY;
                        }
                        timer++;
                    }
                    return;
                }
                for (let j = startY; j > stopY; j -= step) {
                    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                    leapY -= step;
                    if (leapY < stopY) {
                      leapY = stopY;
                    }
                    timer++;
                }
            };


}
