import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newItem, news, newsCategory } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private _http:HttpClient
  ) { }

  getNews():Observable<news>{
    return this._http.get<news>('https://api.npoint.io/d275425a434e02acf2f7')
  }
  getNewsCategory():Observable<newsCategory>{
    return this._http.get<newsCategory>('https://api.npoint.io/91298d970c27e9a06518')
  }
  getNewsDetailsByIndex(index:number):Observable<newItem>{
    return this._http.get<newItem>(`https://api.npoint.io/d275425a434e02acf2f7/News/${index}`)
  }
}
