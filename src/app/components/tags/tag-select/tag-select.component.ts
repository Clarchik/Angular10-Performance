import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnChanges, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { HashTagInput, Tag, TagSelection } from '../../../models/model';

const tagListLimit = 4;

@Component({
    selector: 'mac-tags-select',
    templateUrl: './tag-select.component.html',
    styleUrls: ['./tag-select.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagSelectComponent implements OnChanges {

    @Input() tags: Tag[];
    @Input() hashTagInput: HashTagInput | null;
    @Output() outSelectTag = new EventEmitter<TagSelection>();

    filteredTags: Tag[];

    public filterTags(): void {
        const filter = this.hashTagInput.hashTag.slice(1).toLowerCase();
        this.filteredTags = this.tags
            .filter(tag =>
                tag.hashTag.toLowerCase().includes(filter) ||
                tag.title.toLowerCase().includes(filter)
            )
            .slice(0, tagListLimit);
    }

    public selectTag(tag: Tag): void {
        this.outSelectTag.next({
            tag,
            hashTagInput: this.hashTagInput
        });
    }

    public ngOnChanges(changes): void {
        if ((changes.hashTagInput || changes.tags) && this.hashTagInput) {
            this.filterTags();
        }
    }

    @HostBinding('style.top')
    get topPosition(): string | number {
        return this.hashTagInput && this.hashTagInput.position ?
            `${this.hashTagInput.position.top}px` : 0;
    }

    @HostBinding('style.left')
    get leftPosition(): string | number {
        return this.hashTagInput && this.hashTagInput.position ?
            `${this.hashTagInput.position.left}px` : 0;
    }

}
