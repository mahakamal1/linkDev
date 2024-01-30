import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { slide } from './models/models';
import { HomepageService } from './services/homepage.service';
import { NewsService } from '../news/services/news.service';
import { newItem, newsCategory } from '../news/models/models';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{
  newsArray!:newItem[]
  newsFilteredArray!:newItem[]
  newsCategoryArray!:newsCategory
  selectedCategory:number = 0
  showAll:boolean = false
  slides!:slide[]
  showMore1:boolean = false
  showMore2:boolean = false
  showMore3:boolean = false
  showMore4:boolean = false
  showMore5:boolean = false
  items: MenuItem[] | undefined;

  constructor(
    private _homePageService:HomepageService,
    private _newsSerivce:NewsService
  ) {
  }

  getData(){
    forkJoin({
      news:this._newsSerivce.getNews(),
      newsCategory:this._newsSerivce.getNewsCategory(),
      slide:this._homePageService.getSlides()
    }).subscribe(({news,newsCategory,slide})=>{
      this.newsArray = news.News.filter(x => x.showOnHomepage === 'yes')
      this.newsFilteredArray = news.News.filter(x => x.showOnHomepage === 'yes')
      this.newsCategoryArray = newsCategory
      this.slides = slide.slides
    })
  }

  filter(selectedCategory:number){
    let catId = String(this.selectedCategory)
      console.log(catId)
    if(selectedCategory !== 0){
     this.newsArray =  this.newsFilteredArray.filter(x=>x.categoryID === catId)
    console.log(this.newsArray)
    }else{
      this.newsArray = this.newsFilteredArray
    }
  }

  getCatalogname(catId:string){
    return this.newsCategoryArray.newsCategory.find(x=> x.id == +catId)?.name
  }

  ngOnInit(): void {
    this.getData()

    this.items = [

              {
                  label: '',
                  icon: 'fa-brands fs-1 fa-square-facebook',

              },
              {
                  label: '',
                  icon: 'fa-brands twitterIcon fs-1 fa-square-twitter',

              },
              {
                label:'',
                icon:'fa-solid fs-1 gmail fa-square-envelope'
              }
          ]

}

}
