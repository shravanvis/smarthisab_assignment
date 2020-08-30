import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from './../userservice.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: any;

  constructor(private Userservice: UserserviceService, private activatedroute: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    let id = this.activatedroute.snapshot.params['id'];
    this.Userservice.getAlbums(id).subscribe(useralbum => {
      console.log(useralbum);
      this.albums = useralbum;
    })

    // let id = this.activatedroute.snapshot.params['id']; 
  }

  goback(){
    this.location.back();
  }

}
