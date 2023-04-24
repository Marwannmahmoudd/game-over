import { Component , OnInit} from '@angular/core';
import { GamesService } from '../games.service';
GamesService
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  populargames:any[]=[]
  platform:any
  constructor(private _games:GamesService){}
  ngOnInit(): void {
    this._games.category.subscribe((x:any)=>{
      this.populargames = x
      console.log(this.populargames);
      
      
    })
    
  }
}
