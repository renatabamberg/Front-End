import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[dataNascimento][formControlName],[dataNascimento][formControl],[dataNascimento][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => DataNascimentoValidatorDirective), multi: true }
  ]
})
export class DataNascimentoValidatorDirective implements Validator {

  validate(control: AbstractControl): { [key: string]: any } | null {
    const [year, month, day] = control.value.split('-').map(Number);
    const dataNascimento = new Date(year, month - 1, day);
    const dataAtual = new Date();
    dataAtual.setHours(0, 0, 0, 0);
    if (dataNascimento > dataAtual) {
      return {'dataNascimentoInvalida': true};
    }
    return null;
  }
}
