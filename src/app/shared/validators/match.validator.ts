import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function matchValidator(base: string, target: string, errorMessage: string = "noMatch"): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const baseControl = control.get(base);
    const targetControl = control.get(target);

    if (baseControl?.value !== targetControl?.value) {
      return { [errorMessage]: true };
    }

    return null;
  }
}
