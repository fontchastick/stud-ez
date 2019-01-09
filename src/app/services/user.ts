export class User {
    uid: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    image: string;
    matricule: string;
    university: string;
    spinneret: string;
    level: number;
    paid: number;
    paymentId: string;
    type: string;

    constructor() {
        this.uid = "",
        this.name = "", 
        this.image = "assets/imgs/default-picture.png",
        this.password = "",
        this.confirmPassword = "",
        this.email = "",
        this.matricule = "",
        this.university = "",
        this.spinneret = "",
        this.level = null,
        this.paid = null,
        this.paymentId = "",
        this.type = ""
    }
}