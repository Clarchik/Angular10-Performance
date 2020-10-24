import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project, Tab } from '../../../models/model';

@Component({
    selector: 'mac-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
    @Input() project: Project;
    @Input() tabs: Tab[];
    @Input() activeTab: Tab;
    @Output() outActivateTab = new EventEmitter<Tab>();
    @Output() outUpdateProject = new EventEmitter<Project>();
    constructor() { }

    public activateTab(tab: Tab): void {
        this.outActivateTab.emit(tab);
    }

    public updateProjectTitle(title: string): void {
        this.outUpdateProject.emit({
            ...this.project,
            title
        });
    }

    public updateProjectDescription(description: string): void {
        this.outUpdateProject.emit({
            ...this.project,
            description
        });
    }
}
