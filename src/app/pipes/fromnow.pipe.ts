import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'fromNow'
})
export class FromnowPipe implements PipeTransform {

    transform(value: any): unknown {
        return moment(value).fromNow();
    }

}
