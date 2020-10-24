import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/tasks/task-list/task-list.component';
import { TaskComponent } from './components/tasks/task/task.component';
import { EnterTaskComponent } from './components/tasks/enter-task/enter-task.component';
import { CheckboxComponent } from './components/ui/checkbox/checkbox.component';
import { TaskService } from './services/task.service';
import { ToggleComponent } from './components/ui/toggle/toggle.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TaskDB } from './db/task-db';
import { TaskListContainerComponent } from './components/tasks/task-list-container/task-list-container.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { ProjectContainerComponent } from './components/projects/project-container/project-container.component';
import { TabComponent } from './components/tabs/tab/tab.component';
import { NavigationSectionComponent } from './components/ui/navigation-section/navigation-section/navigation-section.component';
import { NavigationItemComponent } from './components/ui/navigation-item/navigation-item/navigation-item.component';
import { NavigationComponent } from './components/ui/nvavigation/navigation/navigation.component';
import { EditorComponent } from './components/ui/editor/editor.component';
import { ProfilePictureComponent } from './components/user/profile-picture/profile-picture.component';
import { UserAreaComponent } from './components/user/user-area/user-area.component';
import { FromnowPipe } from './pipes/fromnow.pipe';
import { CommentComponent } from './components/comments/comment/comment.component';
import { CommentsComponent } from './components/comments/comments/comments.component';
import { ProjectCommentsContainerComponent } from './components/comments/project-comments-container/project-comments-container.component';
import { ActivitySliderComponent } from './components/activities/activity-slider/activity-slider.component';
import { ActivityComponent } from './components/activities/activity/activity.component';
import { ActivitiesComponent } from './components/activities/activities/activities.component';
import { ProjectActivitiesContainerComponent } from './components/activities/project-activities-container/project-activities-container.component';
import { TagsPipe } from './pipes/tags.pipe';
import { TagsInputDirective } from './directives/tags-input.directive';
import { TagSelectComponent } from './components/tags/tag-select/tag-select.component';
import { DraggableDirective } from './directives/draggable.directive';
import { DraaggableDropZoneDirective } from './directives/draaggable-drop-zone.directive';
import { TaskDetailsComponent } from './components/tasks/task-details/task-details.component';
import { TaskDetailsContainerComponent } from './components/tasks/task-details-container/task-details-container.component';
import { FormatDurationPipe } from './pipes/format-duration.pipe';
import { DdurationComponent } from './components/ui/dduration/dduration.component';
import { EffortsComponent } from './components/efforts/efforts.component';
import { EffortsTimelineComponent } from './components/efforts/efforts-timeline/efforts-timeline.component';
import { ProjectSummaryComponent } from './components/dashboard/project-summary/project-summary.component';
import { ProjectsDashboardComponent } from './components/dashboard/projects-dashboard/projects-dashboard.component';
import { ProjectsDashboardContainerComponent } from './components/dashboard/projects-dashboard-container/projects-dashboard-container.component';
import { FormatEffortsPipe } from './pipes/format-efforts.pipe';
import { ActivityChartComponent } from './components/charts/activity-chart/activity-chart.component';
import { TaskChartComponent } from './components/charts/task-chart/task-chart.component';

@NgModule({
    declarations: [
        AppComponent,
        TaskListComponent,
        TaskComponent,
        EnterTaskComponent,
        CheckboxComponent,
        ToggleComponent,
        TaskListContainerComponent,
        ProjectComponent,
        ProjectContainerComponent,
        TabComponent,
        NavigationItemComponent,
        NavigationSectionComponent,
        NavigationComponent,
        EditorComponent,
        ProfilePictureComponent,
        UserAreaComponent,
        FromnowPipe,
        CommentComponent,
        CommentsComponent,
        ProjectCommentsContainerComponent,
        ActivitySliderComponent,
        ActivityComponent,
        ActivitiesComponent,
        ProjectActivitiesContainerComponent,
        TagsPipe,
        TagsInputDirective,
        TagSelectComponent,
        DraggableDirective,
        DraaggableDropZoneDirective,
        TaskDetailsComponent,
        TaskDetailsContainerComponent,
        FormatDurationPipe,
        DdurationComponent,
        EffortsComponent,
        EffortsTimelineComponent,
        ProjectsDashboardComponent,
        ProjectSummaryComponent,
        ProjectsDashboardContainerComponent,
        FormatEffortsPipe,
        ActivityChartComponent,
        TaskChartComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(TaskDB, {
            delay: 0
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
