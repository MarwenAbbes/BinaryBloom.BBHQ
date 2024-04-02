import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export class NavBarLinks {
    static  NavbarElements = {
        Home: {
            to: "/",
            text: "Home",
            icon: HomeOutlinedIcon,
            subElements: {}
        },
        Products: {
            to: "#",
            text: "Products",
            icon: ShoppingCartOutlinedIcon,
            subElements: {
                Suppliers: {
                    to: "products",
                    text: "Products",
                },
                AddSuppliers: {
                    to: "products/add",
                    text: "Add Product",
                },}
        },
        Categories: {
            to: "categories",
            text: "Categories",
            icon: CategoryOutlinedIcon,
            subElements: {}
        },
        Sale: {
            to: "#",
            text: "Sale",
            icon: PieChartOutlineOutlinedIcon,
            subElements: {}
        },
        Purchases: {
            to: "#",
            text: "Purchases",
            icon: PaymentOutlinedIcon,
            subElements: {}
        },
        People: {
            to: "#",
            text: "People",
            icon: ManageAccountsOutlinedIcon,
            subElements: {
                Customers: {
                    to: "customers",
                    text: "Customers",
                },
                AddCustomers: {
                    to: "customers/add",
                    text: "Add Customer",
                },
                Users: {
                    to: "users",
                    text: "Users",
                },
                AddUsers: {
                    to: "users/add",
                    text: "Add User",
                },
                Suppliers: {
                    to: "suppliers",
                    text: "Suppliers",
                },
                AddSuppliers: {
                    to: "suppliers/add",
                    text: "Add Supplier",
                },
            }
        },
        Reports: {
            to: "#",
            text: "Reports",
            icon: DescriptionOutlinedIcon,
            subElements: {}
        },
        Settings: {
            to: "#",
            text: "Settings",
            icon: SettingsOutlinedIcon,
            subElements: {
                Stores: {
                    to: "settings/stores",
                    text: "Stores",
                },
                Roles: {
                    to: "settings/roles",
                    text: "Roles",
                },
                CompanyInfo: {
                    to: "settings/companyInfo",
                    text: "Company",
                },
            }
        },

    };
}
