import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable ,BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  Headers:any = {'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68', 'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
  platform:any = new BehaviorSubject(null)
  sort:any = new BehaviorSubject(null)
  category:any = new BehaviorSubject(null)
  token:any ;
  token2:any = new BehaviorSubject(null)
  constructor(private _httpclient:HttpClient , private _router:Router ) {
    if((localStorage.getItem('userdata')) !== null){
      this.token = localStorage.getItem('userdata')
     _router.navigate(['/home'])
     }
     else{
         this.token = null
       if(_router.url === '/register'){
         _router.navigate(['/register'])
       }
     }
   }
   getallgames():Observable<any>{
return this._httpclient.get('https://free-to-play-games-database.p.rapidapi.com/api/games',{
  headers : this.Headers
})
   }
   getplatform(platform:any):Observable<any>{
    return this._httpclient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${platform}`,{
      headers : this.Headers
    })
       }
       getsort(sort:any):Observable<any>{
        return this._httpclient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${sort}`,{
          headers : this.Headers
        })
           }
           getcategory(category:any):Observable<any>{
            return this._httpclient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,{
              headers : this.Headers
            })
               }
               getdetails(id:number):Observable<any>{
                return this._httpclient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,{
                  headers : this.Headers
                })
                   }
  }
