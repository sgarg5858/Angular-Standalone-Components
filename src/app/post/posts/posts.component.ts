import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  standalone:true,
  imports:[
    CommonModule
  ],
  providers:[
    PostService
  ]
})
export class PostsComponent implements OnInit {

  constructor(public postService:PostService) { }

  ngOnInit(): void {
    this.postService.getPosts();
  }

}
