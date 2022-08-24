import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordmismatch(contorls:AbstractControl): ValidationErrors | null{ 
    const password= contorls.get('password')?.value;
    const confirmpassword=contorls.get('confirmpassword')?.value;
    if (password !=confirmpassword){
        return {"passwordnotmatch":true};
    }
    return null;
}