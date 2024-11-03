import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: '' , loadComponent: () => import("./layouts/blank-layout/blank-layout.component")
  .then((m) => m.BlankLayoutComponent)

  ,children: [
    {path: '' , redirectTo: 'home' , pathMatch: 'full'},
    {path: 'home' , loadComponent: () => import("./components/home/home.component")
      .then((m) => m.HomeComponent) , title: 'Home'
    },
    {path: 'trending' , loadComponent: () => import("./components/trending/trending.component")
      .then((m) => m.TrendingComponent) , title: 'Trending'
    },
    {path: 'details/:id' , loadComponent: () => import("./components/details/details.component")
      .then((m) => m.DetailsComponent) , title: 'Home'
    }
  ]




}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
