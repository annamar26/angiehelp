import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-courser-view',
  templateUrl: './courser-view.component.html',
  styleUrls: ['./courser-view.component.scss'],


})
export class CourserViewComponent implements OnInit {

chips=["New", "Popular", "Current", "Favorites"]
courses=[{"name": "From Server to Investor", "img":"https://images.adsttc.com/media/images/553f/d8e1/e58e/ce50/2900/00fd/medium_jpg/por-franekn-via-flickr-528x352.jpg?1430247646"}, 
{"name": "From Server to Investor", "img":"https://images.adsttc.com/media/images/553f/d8e1/e58e/ce50/2900/00fd/medium_jpg/por-franekn-via-flickr-528x352.jpg?1430247646"},
{"name": "From Server to Investor", "img":"https://images.adsttc.com/media/images/553f/d8e1/e58e/ce50/2900/00fd/medium_jpg/por-franekn-via-flickr-528x352.jpg?1430247646"}]
  constructor() { }

  ngOnInit(): void {
  }

}
