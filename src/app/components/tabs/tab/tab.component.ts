import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Tab } from '../../../models/model';

@Component({
    selector: 'mac-tabs',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent {
    @Input() tabs: Tab[];
    @Input() activeTab: Tab;
    @Output() outActivateTab = new EventEmitter<Tab>();

    public activateTab(tab: Tab): void {
        this.outActivateTab.emit(tab);
    }

}
