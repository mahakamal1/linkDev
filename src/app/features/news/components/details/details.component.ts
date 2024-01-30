import { Component, OnInit } from '@angular/core';
import { newItem } from '../../models/models';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{

  newsitem!:newItem

  constructor(
    private _route:ActivatedRoute,
    private _newsService:NewsService
  ) {
  }

  getNewsItem(index:number){
    this._newsService.getNewsDetailsByIndex(index).subscribe((data)=>{
      this.newsitem = data
    })
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe((data)=>{
      this.getNewsItem(Number(data.get('id')))
    })
  }

}
