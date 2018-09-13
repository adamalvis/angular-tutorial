import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title;
  authors: string[];

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
    this.title = `${this.authors.length} authors`;
  }

  ngOnInit() {
  }

}
