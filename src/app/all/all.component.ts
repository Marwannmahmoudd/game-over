import { Component , OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit{
  populargames:any[]=[]
  index:any =20
  click:any = 1
constructor(private _games:GamesService , private loaderservices:LoaderService ){}
ngOnInit(): void {
  this.loaderservices.isloader.next(true)
  this._games.getallgames().subscribe((res)=>{
    this.loaderservices.isloader.next(false)
    this.populargames = res;
   
    
  })
}
add(){

this.index = this.index + 20
}
}
