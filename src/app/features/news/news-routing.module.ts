import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: '', component: NewsComponent },
  {path:'details/:id',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
