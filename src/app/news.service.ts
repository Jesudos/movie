/** Service call for news service */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {NEWS} from './news';
import {Result} from './result';
import {UserService} from './user.service';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsListURL : string;
  private recommendNewsURL :string;
  private wishListURL :string;
  private createNewsURL:string;
  private updateNewsURL:string;
  
  constructor(
    private http: HttpClient,
    private userService :UserService
  ) {
    this.newsListURL = "http://newsapp.cfapps.io/news";
    this.recommendNewsURL = "http://newsapp.cfapps.io/news/watchlist/add/";
    this.wishListURL="http://newsapp.cfapps.io/news/watchlist/";
    this.createNewsURL="http://newsapp.cfapps.io/news";
    this.updateNewsURL="http://newsapp.cfapps.io/news/";
  }

  getAllNews(token: any): Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+token
      })
    }
    console.log("My Tokennnnnn "+token);
    return this.http.get<any>(this.newsListURL,httpOptions);
    
  }

  createNews(news,token):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+token
      })
    }
    return this.http.post<any>(this.createNewsURL,news,httpOptions);
  }

  updateNews(news,newsId,token):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+token
      })
    }
    return this.http.put<any>(this.updateNewsURL+newsId,news,httpOptions);
  }



  recommendNews(favNewsId,token):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+token
      })
    }
    return this.http.post<any>(this.recommendNewsURL+favNewsId,null,httpOptions);
  }
  getAllWishListNews(token):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+token
      })
    }
    return this.http.get<any>(this.wishListURL, httpOptions);
  }
}
