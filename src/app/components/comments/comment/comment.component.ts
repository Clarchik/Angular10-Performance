import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { User, Comment, Tag } from '../../../models/model';

@Component({
    selector: 'mac-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentComponent {
    @Input() comment: Comment;
    @Input() user: User;
    @Input() tags: Tag[];
    @Output() outUpdateComment = new EventEmitter<Comment>();

    public updateComment(content: string): void {
        this.outUpdateComment.emit({
            ...this.comment,
            content
        });
    }

}
