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
            subElements: {}
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
                    to: "#",
                    text: "Customers",
                },
                AddCustomers: {
                    to: "#",
                    text: "Add Customers",
                },
                Users: {
                    to: "users",
                    text: "Users",
                },
                AddUsers: {
                    to: "users/add",
                    text: "Add Users",
                },
                Suppliers: {
                    to: "#",
                    text: "Suppliers",
                },
                AddSuppliers: {
                    to: "#",
                    text: "Add Suppliers",
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
            to: "settings",
            text: "Settings",
            icon: SettingsOutlinedIcon,
            subElements: {}
        },

    };
}
