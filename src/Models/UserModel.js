export class UserModel {
    static  FormElements = {
        name: {
            formLabel: "Name",
            name: "name",
            type: "text",
            required: true,
            className: "col-md-6"
        },
        surname: {
            formLabel: "Surname",
            name: "surname",
            type: "text",
            required: true,
            className: "col-md-6"
        },
        birthDay: {
            formLabel: "Birth Date",
            name: "birthDay",
            type: "date",
            required: true,
            className: "col-md-6"
        },
        cin: {
            formLabel: "Social Number",
            name: "cin",
            type: "number",
            required: true,
            className: "col-md-6"
        },
        phoneNumber: {
            formLabel: "Phone Number",
            name: "phoneNumber",
            type: "text",
            required: true,
            className: "col-md-6"
        },
        address: {
            formLabel: "Address",
            name: "address",
            type: "text",
            required: true,
            className: "col-md-12"
        },
        email: {
            formLabel: "Email",
            name: "email",
            type: "text",
            required: true,
            className: "col-md-12"
        },

    };

    constructor() {
        this.id = "";
        this.username = "";
        this.password = "";
        this.passwordConfirmation = "";
        this.name = "";
        this.surname = "";
        this.birthDay = "";
        this.email = "";
        this.phoneNumber = "";
        this.cin = "";
        this.address = "";
        this.enabled = true; // Assuming default is enabled
        this.store_id = "";
        this.role_id = "";
        this.gender_id ="";
    }
}