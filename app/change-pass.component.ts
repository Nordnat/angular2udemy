import {Component} from '@angular/core';
import {ControlGroup, Control, FormBuilder, Validators} from '@angular/common';
import {OldPassMatchValidators} from './validators/oldPassMatchValidators';
import {NotMatchValidators} from './validators/notMatchValidators';

@Component ({
    selector: 'change-pass',
    templateUrl: 'app/template/change-pass.component.html'
})

export class ChangePassComponent {
    changePassForm: ControlGroup;

    constructor(fb: FormBuilder) {
        this.changePassForm = fb.group({
            oldpass: ['', Validators.compose([
                Validators.required,
                OldPassMatchValidators.needToBe,
            ])],
            npass: ['', Validators.compose([
                Validators.required,
                Validators.minLength(5),
            ])],
            confirmpass: ['', Validators.required ]
        },{ validator: NotMatchValidators.needToMatch });
    }
}