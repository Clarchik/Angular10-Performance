import { Pipe, PipeTransform } from '@angular/core';
import { TimeEfforts } from '../models/model';
import { formatDuration } from '../utilities/time-utilities';

@Pipe({
    name: 'formatEfforts'
})
export class FormatEffortsPipe implements PipeTransform {
    public transform(value: TimeEfforts): string | TimeEfforts {
        if (value == null || typeof value !== 'object') {
            return value;
        }

        return `${formatDuration(value.effective) || 'none'} of ${formatDuration(value.estimated) || 'not estimated'}`;
    }
}
