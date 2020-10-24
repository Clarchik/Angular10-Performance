import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectService } from '../services/project.service';

@Injectable({
    providedIn: 'root'
})
export class ProjectContainerGuard implements CanActivate {
    constructor(
        private projectService: ProjectService,
        private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.projectService.getProjects()
            .pipe(
                map(projects => {
                    const projectExists = !!projects.find(project => project.id === +route.params.projectId);
                    if (!projectExists) {
                        this.router.navigate(['/projects', projects[0].id]);
                    }
                    return projectExists;
                })
            );
    }
}
