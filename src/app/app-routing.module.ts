import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
  { path: 'homepage', loadChildren: () => import('./features/homepage/homepage.module').then(m => m.HomepageModule) , component:LayoutComponent},
  { path: 'news', loadChildren: () => import('./features/news/news.module').then(m => m.NewsModule) , component:LayoutComponent},
  {path:'',redirectTo:'homepage',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
