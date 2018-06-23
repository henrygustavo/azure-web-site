import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-json-view',
  templateUrl: './image-json-view.component.html',
  styleUrls: ['./image-json-view.component.css']
})
export class ImageJsonViewComponent implements OnInit {
@Input() response: any;

  constructor() { }

  ngOnInit() {
  }

}
