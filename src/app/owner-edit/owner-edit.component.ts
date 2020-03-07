import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerService } from '../shared/owner/owner.service';

@Component({
  selector: 'app-owner-edit',
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.css']
})
export class OwnerEditComponent implements OnInit {
  @Input() ownerInfo: any;
  @Output() close = new EventEmitter<boolean>();

  owner: any = {};

  sub: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private ownerService: OwnerService) { }

  ngOnInit() {
  }

  gotoList() {
    this.router.navigate(['/owners']);
  }

  update(form) {
    this.ownerService.update(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  hideDetails() {
    this.close.emit(false);
  }

}
