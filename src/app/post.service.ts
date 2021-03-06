import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }

  private postsBehaviorSubject = new BehaviorSubject<any[]|null>(null);
  posts$ = this.postsBehaviorSubject.asObservable();


  getPosts()
  {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts')
    .subscribe(
      (posts:any[])=>this.postsBehaviorSubject.next(posts)),
      ((error:any)=> this.postsBehaviorSubject.next([]))
  }
}
