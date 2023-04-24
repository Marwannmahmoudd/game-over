import { Component } from '@angular/core';
import { GamesService } from '../games.service';
import { PlatformComponent } from '../platform/platform.component';
import { UserService } from '../servicea/user.service';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  platforms:any
  sortby:any;
category:any
platformss:any[]=[]
constructor(private game:GamesService , public _userservices:UserService , public loaderservices:LoaderService){
 
}
select(event:any){
this.platforms = event.target.innerText
this.game.getplatform(this.platforms).subscribe((res)=>{
 
  this.platformss = res
 this.game.platform.next(res)
 console.log(this.game.platform.getValue() );
})
}

select2(event:any){
this.sortby =  event.target.innerText
this.game.getsort(this.sortby).subscribe((res)=>{
 
  this.sortby = res
 this.game.sort.next(res)
 console.log(this.game.sort.getValue() );
})
}
select3(event:any){
 this.category = event.target.innerText
  console.log(this.category);
  this.game.getcategory(this.category).subscribe((res)=>{
 
    this.sortby = res
   this.game.category.next(res)
   console.log(this.game.category.getValue() );
  })
}
}
