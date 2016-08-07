import {Component} from '@angular/core';
import {ControlGroup, Control, Validators, FormBuilder} from '@angular/common';
import {UsernameValidators} from './validators/usernameValidators';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/template/signup-form.component.html'
})
export class SignUpFormComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            username: ['', Validators.compose([
                Validators.required,
                UsernameValidators.cannotContainSpace
            ]), UsernameValidators.shouldBeUnique],
            password: ['', Validators.required]
        });
    }

    // form = new ControlGroup ({
    //     username: new Control('', Validators.required),
    //     password: new Control('', Validators.required)
    // });

    signup() {
        this.form.find('username').setErrors({
            invalidLogin: true
        })

        console.log(this.form.value);
    }
}