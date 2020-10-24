import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { User } from '../../../models/model';

@Component({
    selector: 'mac-profile-picture',
    templateUrl: './profile-picture.component.html',
    styleUrls: ['./profile-picture.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePictureComponent implements OnChanges {
    @Input() user: User;
    pictureSafeUrl: SafeResourceUrl;

    constructor(private sanitizer: DomSanitizer) {

    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.user) {
            this.pictureSafeUrl = this.sanitizer
                .bypassSecurityTrustResourceUrl(this.user.pictureUrl);
        }
    }

}
