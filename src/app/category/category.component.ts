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
  index:any =20
  click:any = 1
  oog:boolean =true
  constructor(private _games:GamesService){}
  ngOnInit(): void {
    this._games.category.subscribe((x:any)=>{
      this.populargames = x
      console.log(this.populargames);
      
      if(x.length <=20){
    this.oog = false 
    console.log(this.oog);
    
      }
    })
    
  }
 
  add(){
    this.click ++
    this.index = this.index * this.click
    }
}
