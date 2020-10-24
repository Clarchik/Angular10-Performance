import { Pipe, PipeTransform } from '@angular/core';
import { formatDuration } from '../utilities/time-utilities';

@Pipe({
    name: 'formatDuration'
})
export class FormatDurationPipe implements PipeTransform {

    public transform(value): any {
        if (value == null || typeof value !== 'number') {
            return value;
        }

        return formatDuration(value);
    }

}
