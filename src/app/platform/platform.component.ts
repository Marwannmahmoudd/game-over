import { Component ,OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent  implements OnInit{
  populargames:any[]=[]
platform:any
constructor(private _games:GamesService ){}

ngOnInit(): void {
  this._games.platform.subscribe((x:any)=>{
    console.log(x);
     
  this.populargames = x
    
    
  })
  
}
}
