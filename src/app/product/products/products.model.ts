export class Products {

    public name: string;
    public company: string;
    public imgPath: string;
    public quantity: number;
    public price: number;



    constructor(name: string, company: string, imgPath: string, quantity: number, price: number) {
        this.name = name;
        this.company = company;
        this.imgPath = imgPath;

        this.quantity = quantity;

        this.price = price;

    }

}