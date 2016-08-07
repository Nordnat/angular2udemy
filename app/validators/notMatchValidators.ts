import {Control, Validators, ControlGroup} from '@angular/common';


export class NotMatchValidators {
    
    static needToMatch(changePassForm: ControlGroup) {
        var newPass = changePassForm.find('npass').value;
        console.log(newPass);

        var confPass = changePassForm.find('confirmpass').value;
        console.log(confPass);

        if (newPass == "" || confPass == "")
            return null;
        if(confPass != newPass)
            return {needToMatch: true};
        return null;
    }
}