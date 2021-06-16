import { RequiredFieldError } from '@/presentation/validation/errors/required-field-error'
import { FieldValidation } from '@/presentation/validation/protocols/field-validation'

export class RequiredFieldValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate (value: string): Error {
    return value ? null : new RequiredFieldError()
  }
}
