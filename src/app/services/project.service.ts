import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../models/model';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private projects = new BehaviorSubject<Project[]>([]);
    private selectedProjectId = new BehaviorSubject<number>(null);
    private selectedProject: Observable<Project>;

    constructor(private http: HttpClient) {
        this.loadProjects();
        this.selectedProject = combineLatest([this.projects, this.selectedProjectId])
            .pipe(
                map(([projects, selectedProjectId]) => {
                    const foundProject = projects.find((project) => project.id === selectedProjectId);
                    return foundProject ? foundProject : null;
                })
            );
    }

    private loadProjects(): void {
        this.http.get<Project[]>('/api/projects')
            .subscribe((projects) => this.projects.next(projects));
    }

    public selectProject(id: number): void {
        this.selectedProjectId.next(id);
    }

    public getSelectedProject(): Observable<Project> {
        return this.selectedProject;
    }

    public getProjects(): Observable<Project[]> {
        return this.projects.asObservable();
    }

    public updateProject(project: Project): void {
        this.http.post(`/api/projects/${project.id}`, project)
            .subscribe(() => this.loadProjects());
    }
}
