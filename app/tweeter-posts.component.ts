import { Component } from '@angular/core';
import { TweetService } from './tweets.service';
import { LikeComponent } from './like.component';
import { AppComponent } from './app.component';

@Component ({
    selector: 'tweeter-posts',
    template: `
        <div *ngFor="let tweet of tweets; let i = index">
        <div class="media">
            <div class="media-left">
                <img class="media-object" src="{{ tweets[i].imageUrl }}" alt="...">
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{ tweets[i].handle }}</h4>
                <span>
                    {{ tweets[i].author }}
                </span>
                <p>{{ tweets[i].body }}</p>
            </div>
            <like 
                [isLiked]="tweets[i].iLike"
                [likesCount]="tweets[i].totalLikes">
            </like>
        </div>
    `,
    providers: [TweetService],
    directives: [LikeComponent]
})

export class TweetPosts {
    tweets;
    likesCount;
    isLiked;
    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }
}

