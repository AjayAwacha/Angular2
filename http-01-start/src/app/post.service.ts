import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post } from './post.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  createAndStorePost(post: Post) {
    return this.http.post('https://angular-http-5e56e-default-rtdb.asia-southeast1.firebasedatabase.app/post.json', post)
  }

  fetchAllPost() {
    return this.http.get<{ k: string, v: Post }>('https://angular-http-5e56e-default-rtdb.asia-southeast1.firebasedatabase.app/post.json',
      {
        headers: new HttpHeaders({
          "custom-header": "cust-head-val"
        }),
        params: new HttpParams().set('param', 'val').append('sad', 'asd')
      }
    )
      .pipe(map((respData) => {
        let tempHoldArray: Post[] = [];
        for (const key in respData) {
          tempHoldArray.push({ ...respData[key], id: key });
        }
        return tempHoldArray;
      }))
  }

  deletePost() {
    return this.http.delete('https://angular-http-5e56e-default-rtdb.asia-southeast1.firebasedatabase.app/post.json');
  }
}
