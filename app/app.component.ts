import { Component } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { FavoriteComponent } from './favvorite.component';
import { LikeComponent } from './like.component';
import { VoteComponent } from './vote.component';
import { TweetPosts } from './tweeter-posts.component';
import { AccordionComponent } from './accordion.component';
import { ContactFormComponent } from './contact-form.component';
import { NewsletterFormComponent } from './newsletter-form.component';
import {SignUpFormComponent} from './signup-form.component';
import {ChangePassComponent} from './change-pass.component';
@Component({
  selector: 'my-app',
  template: `
    <change-pass></change-pass>
    <signup-form></signup-form>
    <newsletter-form></newsletter-form>
    <contact-form></contact-form>
    <h1>My First Angular 2 App</h1>
    <courses></courses>
    <authors></authors>
    <favorite [zajebisty]="post.zajebisty" (change)="onFavoriteChange($event)"></favorite>
    <like [isLiked]="love.isLiked" [likesCount]="love.likesCount" (changeLove)="onLovedChange($event)"></like>
    <br />
    <h1>Vote Element</h1>
    <br />
    <votes [myVote]="voting.myVote"  [voteCount]="voting.voteCount" ></votes>
    
    <div style="margin-top: 40px;">
      <h1>twitt posts</h1>
      <tweeter-posts>Loading...</tweeter-posts>
    </div>
    <br />
    <br />
    <br />
    <accordion></accordion>
  `,
  directives: [ChangePassComponent, SignUpFormComponent, NewsletterFormComponent, 
  ContactFormComponent, CoursesComponent, AuthorsComponent, FavoriteComponent,
  LikeComponent, VoteComponent, TweetPosts, AccordionComponent],
})
export class AppComponent {
  post = {
    title: "Title",
    zajebisty: true
  }
  love = {
    likesCount: 10,
    isLiked: false
  }
  voting = {
    myVote: 0,
    voteCount: 5
  }
  // accordionSwitch = {
  //   isActive: false
  // }
  onFavoriteChange($event) {
    console.log($event);
  }
  onLovedChange($event) {
    console.log($event);
  }
  
}