class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format (){
        return `${this.client} owes $${amount} for this ${this.details}`;
    }
}

const invOne = new Invoice('Tinubu', "loot nigeria", 1000000);
const invTwo = new Invoice('Sonwoolu', "Sweep the redemption camp", 1);

let invoices: Invoice[] = [];
invoices.push(invOne)
invoices.push(invOne)
console.log(invoices);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.value
    )
})
