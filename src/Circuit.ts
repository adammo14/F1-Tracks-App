import { Pin } from './CustomMap';

export class Circuit implements Pin {
    circuitName: string;
    Location: {
        lat: string;
        long: string;
    }

    constructor(circuitName: string, lat: number, long: number) {
        this.circuitName = circuitName;
        this.Location = {
            lat: lat.toString(),
            long: long.toString()
        }
    }

    pinContent(): string {
        return `<h3>${this.circuitName}</h3>`;
    } 
}