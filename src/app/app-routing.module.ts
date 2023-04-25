import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AllComponent } from './all/all.component';
import { platformBrowser } from '@angular/platform-browser';
import { PlatformComponent } from './platform/platform.component';
import { SortbyComponent } from './sortby/sortby.component';
import { CategoryComponent } from './category/category.component';
import { GamedetailsComponent } from './gamedetails/gamedetails.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [ 
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'all',canActivate:[AuthGuard],component:AllComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'platform',canActivate:[AuthGuard],component:PlatformComponent},
{path:'sort',canActivate:[AuthGuard],component:SortbyComponent},
{path:'cate',canActivate:[AuthGuard],component:CategoryComponent},
{path:'details/:id',canActivate:[AuthGuard],component:GamedetailsComponent},
{path:'**',component:RegisterComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
