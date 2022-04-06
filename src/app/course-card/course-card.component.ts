import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CourseCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
