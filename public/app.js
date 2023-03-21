console.log('INTERFACES'); // tutorial 16
// interface isPerson {
//      name: string;
//      age: number;
//      speak(a: string): void;
//      spend(b: number): number
// }
// const me: isPerson = {
//     name: "Toluwanimi",
//     age: 20,
//     speak(text: string): void {
//         console.log(text);
//     },
//     spend(amount: number): number {
//         console.log(`dont spend more ${amount} everyday`);
//         return amount;
//     }
// };
// const greetPerson = (person: isPerson) => {
//     console.log("hello", person.name);
// }
// greetPerson(me);
// console.log(me);
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const invOne = new Invoice('Tinubu', "rigging the election", 1);
const invTwo = new Invoice('Sonwoolu', "Scamming us", 1);
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("luigi", "web work", 250);
// docTwo = new Payment("mario", "plumbing work", 300);
// let doc: HasFormatter[] = [];
// doc.push(docOne);
// doc.push(docTwo);
// console.log(doc);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector('ul');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    // console.log(
    //     // type.value,
    //     // toFrom.value,
    //     // details.value,
    //     // amount.value
    //     doc
    // )
    const list = new ListTemplate(ul);
    list.render(doc, type.value, "start");
});
//  GGENERICS
const addUID = (obj) => {
    const uid = Math.floor(Math.random() * 999);
    return Object.assign(Object.assign({}, obj), { uid });
};
const docOne = addUID({ name: 'yoshi', age: 40 });
// const docTwo = addUID("Alaye!");
console.log(docOne);
;
const docTwo = {
    uid: 419,
    resourceName: "Tinubu",
    data: "A town hall differant from bala blue!"
};
const doc3 = {
    uid: 3,
    resourceName: "Buhari",
    data: {
        garbage: "nigeria, from to bottom"
    }
};
