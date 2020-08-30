import { UserserviceService } from './../userservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private Userservice: UserserviceService, private activatedroute: ActivatedRoute, private location: Location) { }
  userdetails: any;

  alldetails = [];
  
  ngOnInit() {
    let id = this.activatedroute.snapshot.params['id'];
    this.Userservice.getuserbyId(id).subscribe(u => {
      console.log(u);
      this.userdetails = u;
    })
  }

  goback(){
    this.location.back();
  }

}
