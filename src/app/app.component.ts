import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone:true,
  imports:[
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ]
})
export class AppComponent {
  title = 'angular-standalone-components';
}
