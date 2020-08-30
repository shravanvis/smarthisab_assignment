import { UserserviceService } from './../userservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private Userservice: UserserviceService) { }

  users: object;

  ngOnInit() {
    this.allUsers();
  }

  allUsers(){
    this.Userservice.getAllUsers().subscribe((response) => {
      this.users = response;
      console.log(response)
    })
  }

}
