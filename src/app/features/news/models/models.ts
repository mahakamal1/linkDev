export interface news{
  News:newItem[]
}

export interface newItem{
    id: string,
    categoryID:string,
    title: string,
    description: string,
    publishedDate: string,
    content: string,
    urlToImage: string,
    showOnHomepage: string //"showOnHomepage": "no"
}

export interface newsCategory{
  newsCategory:{id:number,name:string}[]
}


