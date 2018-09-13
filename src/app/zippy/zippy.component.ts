import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
  isOpen: boolean = false;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
