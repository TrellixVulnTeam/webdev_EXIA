import { Injectable, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Album} from "./models";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService implements OnInit{

  BASE_URL = 'https://jsonplaceholder.typicode.com'

  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Album[]>{
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`);
  }

  getAlbum(id: number){
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`)
  }

  addAlbum(album: Album): Observable<Album>{
    // @ts-ignore
    return this.client.post(`${this.BASE_URL}/albums`, album);
  }

  updateAlbum(album: Album): Observable<Album>{
    return this.client.put<Album>(`${this.BASE_URL}/albums/${album.id}`, album)
  }

  deleteAlbum(id:number): Observable<any>{
    return this.client.delete(`${this.BASE_URL}/albums/${id}`)
  }
  ngOnInit() {
  }
}
