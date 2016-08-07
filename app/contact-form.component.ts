import { Component } from '@angular/core';

@Component({
    selector: 'contact-form',
    templateUrl: 'app/template/contact-form.component.html',
})
export class ContactFormComponent {
    onSubmit(form) {
        console.log(form)
    }
}