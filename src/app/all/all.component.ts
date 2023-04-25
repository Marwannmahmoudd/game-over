import { Component , OnInit } from '@angular/core';
import { GamesService } from '../games.service';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit{
  populargames:any[]=[]
  index:any =20
  click:any = 1
constructor(private _games:GamesService){}
ngOnInit(): void {
  this._games.getallgames().subscribe((res)=>{
    this.populargames = res;
   
    
  })
}
add(){
this.click ++
this.index = this.index * this.click
}
}
