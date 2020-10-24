import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { TagsService } from '../services/tags.service';

@Pipe({
    name: 'tags'
})
export class TagsPipe implements PipeTransform {

    constructor(
        private tagsService: TagsService,
        private sanitizer: DomSanitizer) { }

    public transform(value): SafeHtml {
        if (typeof value !== 'string') {
            return value;
        }
        return this.tagsService.parse(value).pipe(
            map(parsed => this.sanitizer.bypassSecurityTrustHtml(parsed))
        );
    }

}
