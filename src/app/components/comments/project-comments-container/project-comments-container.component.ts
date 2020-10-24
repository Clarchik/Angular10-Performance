import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Project, User, Comment, CommentUpdate, Tag } from '../../../models/model';
import { ProjectService } from '../../../services/project.service';
import { TagsService } from '../../../services/tags.service';
import { UserService } from '../../../services/user.service';

@Component({
    selector: 'mac-project-comments-container',
    templateUrl: './project-comments-container.component.html',
    styleUrls: ['./project-comments-container.component.scss']
})
export class ProjectCommentsContainerComponent {
    user: Observable<User>;
    tags: Observable<Tag[]>;
    selectedProject: Observable<Project>;
    projectComments: Observable<Comment[]>;

    constructor(
        private projectService: ProjectService,
        private userService: UserService,
        private tagsService: TagsService,
        private route: ActivatedRoute) {
        this.user = this.userService.getCurrentUser();
        this.selectedProject = combineLatest(
            [projectService.getProjects(),
            route.parent.params]
        ).pipe(
            map(([projects, routeParams]) =>
                projects.find((project) => project.id === +routeParams.projectId)
            )
        );
        this.projectComments = this.selectedProject
            .pipe(
                map((project) => project.comments)
            );
        this.tags = this.tagsService.tags;
    }

    public createComment(comment: Comment): void {
        this.selectedProject
            .pipe(
                take(1)
            )
            .subscribe((project) => this.projectService.updateProject({
                ...project,
                comments: [...project.comments, comment]
            }));
    }

    public updateComment(update: CommentUpdate): void {
        this.selectedProject
            .pipe(
                take(1)
            )
            .subscribe((project) => {
                const updatedComments = project.comments.slice();
                updatedComments[update.index] = update.comment;
                this.projectService.updateProject({
                    ...project,
                    comments: updatedComments
                });
            });
    }

}
