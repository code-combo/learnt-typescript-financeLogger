import { HasFormatter } from "../interfaces/HasFormatter";

export class Payment implements HasFormatter {
    readonly recipient: string;
    private details: string;
    public amount: number;

    constructor(c: string, d: string, a: number) {
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }

    format (){
        return `${this.recipient} is owed $${this.amount}M for ${this.details}`;
    }
}