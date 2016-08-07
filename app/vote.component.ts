import {Component, Input} from '@angular/core';

@Component ({
    selector: 'votes',
    template: `
    <div class="vote-container">
        <i class="glyphicon glyphicon-menu-up" [class.highlighted]="myVote === 1" (click)="onClickUp()"></i>
        <span>{{ voteCount + myVote }}</span>
        <i class="glyphicon glyphicon-menu-down" [class.highlighted]="myVote === -1" (click)="onClickDown()"></i>
    </div>
    `,
    styles: [`
        .vote-container {
            width: 40px;
            font-size: 32px;
            margin: auto;
        }
        .vote-container .glyphicon, .vote-container span {
            display: block;
            text-align: center;
        }
        .vote-container .glyphicon {
            color: grey;
            cursor: pointer;
        }
        .vote-container .glyphicon.highlighted {
            color: orange;
        }
    `]
})


export class VoteComponent {
    @Input() voteCount = 0;
    @Input() myVote = 0;

    // @Output() vote = new EventEmitter;

    onClickUp() {
        if (this.myVote === 1) {
            return;
        }
        this.myVote++;
        // this.vote.emit({
        //     myVote: this.myVote
        // })
    }
    onClickDown() {
        if (this.myVote === -1) {
            return;
        }
        this.myVote--;
        // this.vote.emit({
        //     myVote: this.myVote
        // })
    }
}
