import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GamesService } from '../games.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-gamedetails',
  templateUrl: './gamedetails.component.html',
  styleUrls: ['./gamedetails.component.css']
})

export class GamedetailsComponent implements OnInit{
  data:any
  id:any
 data2:any
 data3:any
video:any
@ViewChild('videoPlayer') videoplayer!: ElementRef;
constructor(private game:GamesService ,private _active:ActivatedRoute , private loaderservices:LoaderService ){
 
}
startVideo(video:any , img:any){
  img.classList.add('opacity-0')
  video.classList.remove('d-none')
   video.play()
 

   console.log(video);
}
 stopVideo(video:any ,img:any){
  video.pause()
  video.classList.add('d-none')
  img.classList.remove('opacity-0')
  console.log(video);
}

ngOnInit(): void {

    this.loaderservices.isloader.next(true)


 
  this._active.paramMap.subscribe((all)=>{
    this.id = all.get('id') || ''
     console.log(this.id);
     
   })
  this.game.getdetails(this.id).subscribe((res)=>{
    setTimeout(() => {
      this.loaderservices.isloader.next(false)
    }, 400);
    
    console.log(res.thumbnail.replace("thumbnail.jpg", "videoplayback.webm"));
    this.data = res
    this.data2 = res.thumbnail.replace("thumbnail", "background")
    this.data3 = res.thumbnail.replace("thumbnail.jpg", "videoplayback.webm")
    console.log(this.data3);
    
  })
}
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  autoplay: true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 500,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
  },
  nav: false
}
}