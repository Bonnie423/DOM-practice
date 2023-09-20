// let small = 1
// let medium = 2
// let large = 3

const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium
console.log(mySize)

function calculateTax(income: number): number {
  if (income < 5000) return income * 1.2
  return income * 1.3
}

type Employee = {

  name: string
  readonly id: number
  retire: (date: Date) => void
}

let employee: Employee {
} = { id: 1, name: 'Bonnie', retire: (date: Date) => console.log(date) }

function kgTOLbs(weight : number | string) : number {
  if(typeof weight === 'number' ) return weight * 2.2
  return parseInt(weight)* 2.2

}
kgTOLbs(10)