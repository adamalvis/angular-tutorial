import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    {{ text | summary:10 }}
  `,
})
export class CoursesComponent {
  text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium delectus ducimus provident dicta, amet nobis deserunt neque corporis error cum accusamus vitae rem consectetur, quibusdam mollitia tempora natus ipsam culpa at ea expedita ad voluptatibus nisi nihil. Cupiditate iste, officiis aperiam et amet assumenda. Sit totam provident, deserunt error deleniti aliquam magnam, quae reiciendis fugiat temporibus similique, distinctio quam eaque id? Voluptate sapiente molestiae accusantium perspiciatis! Vero sint eos impedit veritatis accusantium nisi, perspiciatis maiores dolores, error quasi assumenda cumque! Optio soluta cupiditate enim quis ullam numquam doloremque animi ipsum commodi laudantium! Iste magnam illum odio alias? Rerum, temporibus natus.';
}
