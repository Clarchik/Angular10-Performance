import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ProjectSummary, TimeEfforts } from '../../../models/model';

@Component({
    selector: 'mac-project-summary',
    templateUrl: './project-summary.component.html',
    styleUrls: ['./project-summary.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ProjectSummaryComponent implements OnChanges {
    @Input() projectSummary: ProjectSummary;

    totalEfforts: TimeEfforts;

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.projectSummary && this.projectSummary) {
            this.totalEfforts = this.projectSummary.tasks.reduce((totalEfforts, task) => {
                if (task.efforts) {
                    totalEfforts.estimated += task.efforts.estimated || 0;
                    totalEfforts.effective += task.efforts.effective || 0;
                }
                return totalEfforts;
            }, {
                estimated: 0,
                effective: 0
            });
        }
    }

}
