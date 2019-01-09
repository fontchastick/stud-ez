export class Announce {
    title: string;
    university: string;
    spinneret: string;
    content: string;
    time: number;

    constructor() {
        this.title = "",
        this.university = "Université de Douala",
        this.spinneret = "Commerce Extra-terrestre",
        this.content = "",
        this.time = Date.now()
    }
}