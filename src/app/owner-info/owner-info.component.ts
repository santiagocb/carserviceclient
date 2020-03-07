import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-owner-info',
  templateUrl: './owner-info.component.html',
  styleUrls: ['./owner-info.component.css']
})
export class OwnerInfoComponent implements OnInit {
  @Input() owner: any;

  public showEdit = false;

  constructor() { }

  ngOnInit() {
  }

  showDetails(flag: boolean) {
    this.showEdit = flag;
  }

}
