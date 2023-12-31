import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,
    children: [
      { path: 'news', component: NewsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
