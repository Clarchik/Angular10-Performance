import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { TagsInputDirective } from '../../../directives/tags-input.directive';
import { CommentUpdate, User, Comment, Tag, TagSelection } from '../../../models/model';
import { splice } from '../../../utilities/string-utilities';

@Component({
    selector: 'mac-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
    @Input() user: User;
    @Input() comments: Comment[];
    @Output() outUpdateComment = new EventEmitter<CommentUpdate>();
    @Output() outCreateComment = new EventEmitter<Comment>();
    @ViewChild('commentContentEditable') commentContentEditable: ElementRef;
    @Input() tags: Tag[];
    @ViewChild('commentContentEditable', {
        static: true,
        read: TagsInputDirective
    }) tagsInput: TagsInputDirective;

    public createComment(): void {
        this.outCreateComment.emit({
            user: this.user,
            time: +new Date(),
            content: this.commentContentEditable.nativeElement.textContent
        });
        this.commentContentEditable.nativeElement.textContent = '';
        this.tagsInput.reset();
    }

    public updateComment(index: number, comment: Comment): void {
        this.outUpdateComment.next({
            index,
            comment
        });
    }

    public selectTag(tagSelection: TagSelection): void {
        this.commentContentEditable.nativeElement.textContent =
            splice(
                this.commentContentEditable.nativeElement.textContent,
                tagSelection.hashTagInput.position.caretOffset,
                tagSelection.hashTagInput.hashTag.length,
                tagSelection.tag.hashTag
            );
        this.tagsInput.reset();
    }

}
