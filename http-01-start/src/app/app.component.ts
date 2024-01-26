import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isLoading = false;
  error: string = null;

  constructor(
    private postService: PostService
    ) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    this.isLoading = true;
    this.postService.createAndStorePost(postData)
    .subscribe(() => {
      this.isLoading = false
    }, (error) => {
      this.isLoading = false;
      this.error = error.message;
    });
  }

  onFetchPosts() {
    this.isLoading = true;
    this.postService.fetchAllPost()
    .subscribe((respose) => {
      this.isLoading = false;
      this.loadedPosts = respose;
    }, (error) => {
      this.isLoading = false;
      this.error = error.message;
    });
  }

  onClearPosts() {
    this.isLoading = true;
    this.postService.deletePost()
    .subscribe(() =>{
      this.isLoading = false;
      this.loadedPosts = [];
    }, (error) => {
      this.isLoading = false;
      this.error = error.message;
    });
  }

  handleError() {
    this.error = null;
  }
}
