import { Component, OnInit } from '@angular/core';
import {Photos} from "../models";
import {PhotosService} from "../photos.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Album} from "../models";

@Component({
  selector: 'app-albums-photo',
  templateUrl: './albums-photo.component.html',
  styleUrls: ['./albums-photo.component.css']
})
export class AlbumsPhotoComponent implements OnInit {
  photos!: Photos[];
  loaded!: boolean;
  albumId!: number;
  albums!: Album[];

  constructor(private photosService: PhotosService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.getPhoto();
  }
  getPhoto(){
    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      const id = +params.get('id');
      this.loaded = false;
      this.photosService.getPhoto(id).subscribe((photo) =>{
        this.photos = photo;
        this.loaded = true;
      });
    });
  }

  goBack(){
    this.location.back();
  }
}
