import { Component , OnInit} from '@angular/core';
import { GamesService } from '../games.service';
import { LoaderService } from '../loader.service';
LoaderService
@Component({
  selector: 'app-sortby',
  templateUrl: './sortby.component.html',
  styleUrls: ['./sortby.component.css']
})
export class SortbyComponent {
  populargames:any[]=[]
  platform:any
  index:any =20
click:any = 1
  constructor(private _games:GamesService , private loaderservices:LoaderService ){}
  
  ngOnInit(): void {
    this.loaderservices.isloader.next(true)
    this._games.sort.subscribe((x:any)=>{
      this.loaderservices.isloader.next(false)
      this.populargames = x
      console.log(this.populargames);
      
      
    })
    
  }
  add(){
    this.index = this.index + 20
    }
}
