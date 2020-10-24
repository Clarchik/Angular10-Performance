import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'mac-navigation-section',
    templateUrl: './navigation-section.component.html',
    styleUrls: ['./navigation-section.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationSectionComponent {
    @Input() title: string;

}
