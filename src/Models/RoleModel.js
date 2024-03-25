export class RoleModel {
    static  FormElements = {
        name: {
            formLable: "Name",
            name: "name",
            type: "text",
        }

    };

    constructor() {
        this.id = "";
        this.name = "";
    }
}

