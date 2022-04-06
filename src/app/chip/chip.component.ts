import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ChipComponent implements OnInit {
@Input() title: string= ""
  constructor() { }

  ngOnInit(): void {
  }

}
