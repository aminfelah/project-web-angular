export class Reservation{
    firstName: string = "";
    lastName: string = "";
    email: string = '';
    tel: number = 0;
    pick_up_date!: Date;
    pick_up_location: string = '';
    nbrDays: number = 0;
    payment_method: string = "";
    car_id: string = ""; 

    constructor(
        firstName: string,
        lastName: string,
        email: string,
        tel: number,
        pick_up_date: Date,
        pick_up_location: string,
        nbrDays: number,
        payment_method: string,
        car_id: string
        ) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.tel = tel;
            this.pick_up_date = pick_up_date;
            this.pick_up_location = pick_up_location;
            this.nbrDays = nbrDays;
            this.payment_method = payment_method;
            this.car_id = car_id; 
    }

    // this.id = "";
    // this.firstName = "";
    // this.lastName = "";
    // this.email = '';
    // this.tel = 0;
    // this.pick_up_date = null;
    // this.pick_up_location = '';
    // this.nbrDays = 0;
    // this.payment_method = "";
    // this.car_id = "";
     
}