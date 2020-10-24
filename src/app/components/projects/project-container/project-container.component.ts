import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Project, Tab } from '../../../models/model';
import { ProjectService } from '../../../services/project.service';

@Component({
    selector: 'mac-project-container',
    templateUrl: './project-container.component.html',
    styleUrls: ['./project-container.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectContainerComponent {
    selectedProject: Observable<Project>;
    tabs: Tab[] = [
        { id: 'tasks', title: 'Tasks' },
        { id: 'comments', title: 'Comments' },
        { id: 'activities', title: 'Activities' }
    ];
    activeTab: Observable<Tab>;

    constructor(
        private projectService: ProjectService,
        private route: ActivatedRoute,
        private router: Router) {
        this.selectedProject = this.loadProject();
        this.activeTab = this.loadActiveTab();
    }

    public activateTab(tab: Tab): void {
        this.selectedProject
            .pipe(take(1))
            .subscribe((project: Project) => {
                this.router.navigate([
                    '/projects',
                    project.id,
                    tab.id
                ]);
            });
    }

    public updateProject(project: Project): void {
        this.projectService.updateProject(project);
    }

    public loadProject(): Observable<any> {
        return combineLatest([this.projectService.getProjects(), this.route.params]).pipe(
            map(([projects, routeParams]) => {
                return projects.find((project) => project.id === +routeParams.projectId);
            })
        );
    }

    private loadActiveTab(): Observable<any> {
        return combineLatest(
            [this.selectedProject, this.route.url]
        ).pipe(
            map(([project]) => {
                return this.tabs.find((tab) =>
                    this.router.isActive(
                        `/projects/${project.id}/${tab.id}`,
                        false
                    )
                );
            })
        );
    }
}
