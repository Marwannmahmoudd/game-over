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
isLoading:boolean =true
  constructor(private _games:GamesService , private loaderservices:LoaderService ){}
  
  ngOnInit(): void {
   
    this._games.sort.subscribe((x:any)=>{
      setTimeout(() => {
    
      this.populargames = x
      console.log(this.populargames);
      this.isLoading = false
      
    },1000)
    
  })
}
  add(){
    this.index = this.index + 20
    }
}
