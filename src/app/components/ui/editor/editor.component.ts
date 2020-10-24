import {
    AfterViewInit,
    Component, ElementRef, EventEmitter,
    HostBinding, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation
} from '@angular/core';
import { TagsInputDirective } from '../../../directives/tags-input.directive';
import { Tag, TagSelection } from '../../../models/model';
import { splice } from '../../../utilities/string-utilities';

@Component({
    selector: 'mac-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnChanges, AfterViewInit {
    @ViewChild('editableContentElement') editableContentElement: ElementRef;
    @ViewChild('editableContentElement', {
        static: true,
        read: TagsInputDirective
    }) tagsInput: TagsInputDirective;
    @Input() tags: Tag[];
    @HostBinding('class.edit-mode') editMode = false;
    @Input() content: string;
    @Input() showControls: boolean;
    @Output() outSaveEdit = new EventEmitter<string>();
    @Output() outCancelEdit = new EventEmitter<never>();


    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.content && this.editableContentElement) {
            this.setEditableContent(this.content);
        }
    }

    public ngAfterViewInit(): void {
        this.setEditableContent(this.content);
    }

    @HostListener('click')
    public focusEditableContent(): void {
        if (this.editMode) {
            this.editableContentElement.nativeElement.focus();
        }
    }

    public saveEdit(): void {
        this.editMode = false;
        this.tagsInput.reset();
        this.outSaveEdit.emit(this.getEditableContent());
    }

    public cancelEdit(): void {
        this.editMode = false;
        this.tagsInput.reset();
        this.setEditableContent(this.content);
        this.outCancelEdit.emit();
    }

    public beginEdit(): void {
        this.editMode = true;
    }

    public selectTag(tagSelection: TagSelection): void {
        this.setEditableContent(
            splice(
                this.getEditableContent(),
                tagSelection.hashTagInput.position.caretOffset,
                tagSelection.hashTagInput.hashTag.length,
                tagSelection.tag.hashTag
            ));
        this.tagsInput.reset();
    }

    private getEditableContent(): any {
        return this.editableContentElement.nativeElement.textContent;
    }

    private setEditableContent(content: string): void {
        this.editableContentElement.nativeElement.textContent = content;
    }
}
