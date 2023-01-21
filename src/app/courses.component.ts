import { Component } from '@angular/core';

@Component({
    selector: 'courses', //<everywhere it goes, so does the courses component>
    template: '<h2>{{ getTitle() }}</h2>'

})

 export class CoursesComponent {
    title = "List of Courses";




getTitle(){
    return this.title;
}

}