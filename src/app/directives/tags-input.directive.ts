import { Directive, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HashTagInput } from '../models/model';
import { getRangeBoundingClientRect } from '../utilities/dom-utilities';

@Directive({
    selector: '[macTagsInput]'
})
export class TagsInputDirective {
    private hashTagInput: HashTagInput | null = null;
    private hashTagSubject = new BehaviorSubject<HashTagInput>(this.hashTagInput);
    hashTagChange = this.hashTagSubject.asObservable();
    constructor() { }

    public reset(): void {
        this.hashTagInput = null;
        this.hashTagSubject.next(this.hashTagInput);
    }

    private updateHashTag(hashTag, position = this.hashTagInput.position): void {
        this.hashTagInput = { hashTag, position };
        this.hashTagSubject.next(this.hashTagInput);
    }

    @HostListener('keydown', ['$event'])
    public keyDown(event: KeyboardEvent): void {
        if (this.hashTagInput && event.which === 8) {
            this.updateHashTag(this.hashTagInput.hashTag.slice(0, -1));
        }
    }

    @HostListener('keypress', ['$event'])
    public keyPress(event: KeyboardEvent): void {
        const char = String.fromCharCode(event.which);
        if (char === '#') {
            this.updateHashTag('#', getRangeBoundingClientRect());
        } else if (!/[\w-]/i.test(char)) {
            this.reset();
        } else if (this.hashTagInput) {
            this.updateHashTag(this.hashTagInput.hashTag + char);
        }
    }
}
