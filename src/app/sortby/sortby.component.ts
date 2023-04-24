import { Component , OnInit} from '@angular/core';
import { GamesService } from '../games.service';
@Component({
  selector: 'app-sortby',
  templateUrl: './sortby.component.html',
  styleUrls: ['./sortby.component.css']
})
export class SortbyComponent {
  populargames:any[]=[]
  platform:any
  constructor(private _games:GamesService){}
  
  ngOnInit(): void {
    this._games.sort.subscribe((x:any)=>{
      this.populargames = x
      console.log(this.populargames);
      
      
    })
    
  }
}
