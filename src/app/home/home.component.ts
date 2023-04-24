import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  populargames:any[]=[]
constructor(private _games:GamesService){}
ngOnInit(): void {
  this._games.getallgames().subscribe((res)=>{
    this.populargames = res.splice(0,3);
    console.log(res);
    
    
  })
}
}
