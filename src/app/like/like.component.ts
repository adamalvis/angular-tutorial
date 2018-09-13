import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() likes: number;
  @Input() isLiked: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleIsLiked() {
    this.isLiked = !this.isLiked;
    this.likes += this.isLiked ? 1 : -1;
  }

}
