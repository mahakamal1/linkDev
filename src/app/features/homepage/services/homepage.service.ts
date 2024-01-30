import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { slidesArr } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  url = './assets/dataJson/banner.json'

  constructor(
    private _http:HttpClient
  ) { }



  getSlides():Observable<slidesArr>{
    return this._http.get<slidesArr>(this.url)
  }
}
