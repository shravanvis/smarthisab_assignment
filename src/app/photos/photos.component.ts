import { UserserviceService } from './../userservice.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: any;

  constructor(private activatedroute: ActivatedRoute, private Userservice: UserserviceService, private location: Location) { }

  ngOnInit() {
    let id = this.activatedroute.snapshot.params['id'];
    this.Userservice.getPhotos(id).subscribe(albumphotos => {
      console.log(albumphotos);
      this.photos = albumphotos;
    })
  }

  back(){
    this.location.back();
  }
}
