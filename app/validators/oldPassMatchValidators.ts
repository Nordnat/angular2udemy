import {Control} from '@angular/common';

export class OldPassMatchValidators {
    static needToBe(control: Control) {
        if(control.value == "1234")
            return null;
        return { needToBe: true }
    }
}