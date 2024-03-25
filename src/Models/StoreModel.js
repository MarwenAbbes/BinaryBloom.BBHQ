export class StoreModel {
    static  FormElements = {
        name: {
            formLable: "Name",
            name: "name",
            type: "text",
            required:true
        },
        address:{
            formLable: "Address",
            name: "address",
            type: "text",
            required:true
        }
    };
    constructor() {
        this.id = "";
        this.name = "";
        this.address = "";
    }
}