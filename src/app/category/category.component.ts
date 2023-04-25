import { Component , OnInit} from '@angular/core';
import { GamesService } from '../games.service';
import { LoaderService } from '../loader.service';
LoaderService
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
  constructor(private _games:GamesService , private loaderservices:LoaderService ){}
  ngOnInit(): void {
    this.loaderservices.isloader.next(true)
    this._games.category.subscribe((x:any)=>{
      this.loaderservices.isloader.next(false)
      this.populargames = x
      console.log(this.populargames);
      
      if(x.length <=20){
    this.oog = false 
    console.log(this.oog);
    
      }
    })
    
  }
 
  add(){
    this.index = this.index + 20
    }
}
