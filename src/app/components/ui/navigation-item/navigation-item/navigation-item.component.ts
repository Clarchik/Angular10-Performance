import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'mac-navigation-item',
    templateUrl: './navigation-item.component.html',
    styleUrls: ['./navigation-item.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationItemComponent {

    @Input() title: string;
    @Input() navId: any;
    @Output() outActivateNavigationItem = new EventEmitter<any>();
    @HostListener('click')
    public activateNavigationItem(): void {
        this.outActivateNavigationItem.emit(this.navId);
    }

}
