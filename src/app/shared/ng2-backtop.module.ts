import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BacktopDirective} from './ng2-backtop.directive';


@NgModule({
    imports: [CommonModule],
    providers: [],
    declarations: [BacktopDirective],
    exports: [CommonModule, BacktopDirective]
})
export class BacktopModule {}
