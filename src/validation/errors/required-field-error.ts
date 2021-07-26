export class RequiredFieldError extends Error {
  constructor () {
    super('Campo obrigátorio')
    this.name = 'ReuiredFieldError'
  }
}
