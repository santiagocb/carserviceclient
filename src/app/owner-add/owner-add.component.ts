import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OwnerService } from '../shared/owner/owner.service';

@Component({
  selector: 'app-owner-add',
  templateUrl: './owner-add.component.html',
  styleUrls: ['./owner-add.component.css']
})
export class OwnerAddComponent implements OnInit {
  ownerInfo: any = {};

  constructor(private router: Router,
              private ownerService: OwnerService) { }

  ngOnInit() {
  }

  gotoList() {
    this.router.navigate(['/owners']);
  }

  save(form: NgForm) {
    this.ownerService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  // remove(href) {
  //   this.carService.remove(href).subscribe(result => {
  //     this.gotoList();
  //   }, error => console.error(error));
  // }

}
