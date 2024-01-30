

export interface slidesArr{
  slides:slide[]
}

export interface slide{
  id:number,
  brief:string,
  order:number,
  title:string ,//'',
  imgUrl:string,
  itemUrl:string,
  category:string,
  videoUrl:string,
  colorCode:string
}
