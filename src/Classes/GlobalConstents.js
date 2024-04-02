export const API_URL = "http://localhost:3651";
export const Genders = [{
    id: 1,
    name: "Male"
}, {
    id: 2,
    name: "Female"
}];
export const UserStatus = ["Active", "Inactive"];

export const Operation = {
    Delete: 'D',
    Edit: 'E',
    Show: 'S',
    Add:'A'

};

export const Results= {
    SUCCESS : "SUCCESS",
    FAILURE : "FAILURE"
}

export const OrderStatus={
    PENDING : "PENDING",
    PROCESSING:"PROCESSING",
    SHIPPED:"SHIPPED",
    DELIVERED:"DELIVERED",
    CANCELLED:"CANCELLED"
}

export const PaymentMethods={
    Cash:"Cash",
    Check:"Check"
}

export const TransactionType={
    Debit:"Debit",
    Credit:"Credit"
}

export const FinancialOperations={
    INVOICE:"Invoice", //Facture
    DELIVERY_NOTE:"DELIVERY_NOTE", // Bon de livraison
    ISSUE_VOUCHER:"ISSUE_VOUCHER", // Bon de sortie
    PURCHASE_ORDER:"PURCHASE_ORDER", // Bon de command
    RECEIVING_NOTE:"RECEIVING_NOTE", // Bon d'entree
    RETURN_SLIP:"RETURN_SLIP", //Avoire
}