
import {Component} from '@angular/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{ title }}
        <input type="text" autoGrow [value]="inputText" (input)="inputText = $event.target.value" />
        Prev: {{ inputText }}
        <input type="button" (click)="inputText = ''" value="Clear" />
        
        <!-- <input [(ngModel)]="inputText" /> -->


        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})

export class CoursesComponent{
    title: string = "The couurs page title";
    courses;
    inputText: string = "";
    star;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}