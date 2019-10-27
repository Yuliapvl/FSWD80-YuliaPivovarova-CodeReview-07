import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TravelpageComponent } from './travelpage/travelpage.component';
import { BlogpageComponent } from './blogpage/blogpage.component';


const routes: Routes = [
{
path: "", component: HomepageComponent
},
{
path: "travel", component: TravelpageComponent
},
{
path: "blog" , component: BlogpageComponent
}
];


@ NgModule({
imports: [RouterModule.forRoot(routes)
],
exports: [RouterModule]
})
export class AppRoutingModule { }