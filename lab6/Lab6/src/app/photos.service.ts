import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album, Photos} from "./models";


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  BASE_URL ='https://jsonplaceholder.typicode.com/albums';

  constructor(private client: HttpClient) { }

  // getPhotos(): Observable<Photos[]>{
  //   return this.client.get<Photos[]>(`${this.BASE_URL}albums/${albumId}/photos`);
  // }

  getPhoto(albumId: number): Observable<Photos[]>{
    return this.client.get<Photos[]>(`${this.BASE_URL}/${albumId}/photos`);
  }
}
