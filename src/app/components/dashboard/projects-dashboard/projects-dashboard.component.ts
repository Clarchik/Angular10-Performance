import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Project, ProjectSummary } from '../../../models/model';

@Component({
    selector: 'mac-projects-dashboard',
    templateUrl: './projects-dashboard.component.html',
    styleUrls: ['./projects-dashboard.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class ProjectsDashboardComponent {
    @Input() projectSummaries: ProjectSummary[];
    @Output() outActivateProject = new EventEmitter<Project>();

    public activateProject(project: Project): void {
        this.outActivateProject.emit(project);
    }

}
