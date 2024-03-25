export class CompanyInfoModel{
    static  FormElements = {
        name: {
            formLabel: "Name",
            name: "name",
            type: "text",
        },
        principalAddress: {
            formLabel: "Principal Address",
            name: "principalAddress",
            type: "text",
        },
        secondaryAddress: {
            formLabel: "Secondary Address",
            name: "secondaryAddress",
            type: "text",
        },
        email: {
            formLabel: "Email",
            name: "email",
            type: "email",
        },
        principalPhoneNumber: {
            formLabel: "Principal Phone Number",
            name: "principalPhoneNumber",
            type: "tel",
        },
        secondaryPhoneNumber: {
            formLabel: "Secondary Phone Number",
            name: "secondaryPhoneNumber",
            type: "tel",
        },
        faxNumber: {
            formLabel: "Fax Number",
            name: "faxNumber",
            type: "tel",
        },
        taxIdentificationNumber: {
            formLabel: "Tax Identification Number",
            name: "taxIdentificationNumber",
            type: "text",
        },

    };
    constructor() {
        this.id="1";
        this.name = "";
        this.principalAddress = "";
        this.secondaryAddress = "";
        this.email = "";
        this.principalPhoneNumber = "";
        this.secondaryPhoneNumber = "";
        this.faxNumber = "";
        this.taxIdentificationNumber = "";
    }
}