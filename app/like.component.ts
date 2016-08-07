import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component ({
    selector: 'like',
    template: `
            <i class="glyphicon glyphicon-heart"
                [class.liked]="isLiked"
                [class.disliked]="!isLiked"
                [style.fontSize] = fSize
                [style.cursor] = hand
                (click)="onClick()"
            >
            </i>
            <span>{{ likesCount }}</span>
    `,
    styles: [`
        .glyphicon-heart {
        }
        .liked {
            color: pink;
        }
        .disliked {
            color: gray;
        }
    `]
})

export class LikeComponent {
    @Input() isLiked: boolean = false;
    @Input() likesCount = 0;
    fSize = '28px';
    hand = 'pointer';

    @Output() changeLove = new EventEmitter();

    onClick() {
        this.isLiked = !this.isLiked;
        this.likesCount += this.isLiked ? 1 : -1;
        this.changeLove.emit({
            likeValue: this.isLiked
        });
    }
}
