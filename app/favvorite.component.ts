import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
    selector: 'favorite',
    templateUrl: 'app/favvorite.template.html',
    // inputs: ['isFavorite:zajebisty']
    styles: [`
        .glyphicon-star, .glyphicon-star-empty {
            color: orange;
        }
    `]
})

export class FavoriteComponent {
    @Input('zajebisty') isFavorite:boolean = false;
    fSize:string = '28px';
    hend:string = 'pointer';

    @Output() change = new EventEmitter();

    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({
            newValue: this.isFavorite
        });
    }
}