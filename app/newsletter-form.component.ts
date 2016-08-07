import { Component } from '@angular/core';

@Component({
    selector: 'newsletter-form',
    templateUrl: 'app/template/newsletter-form.component.html',
})

export class NewsletterFormComponent {
    frequencies = [
        { id: 1, label: 'Daily' },
        { id: 2, label: 'Weekly' },
        { id: 3, label: 'Monthly' }
    ];


    onSubscribe(form) {
        console.log(form.value)
    }
}
