// assets
import {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconFileInvoice,
} from "@tabler/icons-react";

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconFileInvoice,
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

export const utilities = {
  id: "utilities",
  title: "Utilities",
  type: "group",
  children: [
    {
      id: "invoice",
      title: "Facturación",
      type: "item",
      url: "/invoice",
      icon: icons.IconFileInvoice,
      breadcrumbs: false,
    },
    {
      id: "simple-invoice",
      title: "Facturacion simple",
      type: "item",
      url: "/simple-invoice",
      icon: icons.IconPalette,
      breadcrumbs: false,
    },
    {
      id: "util-shadow",
      title: "Clientes",
      type: "item",
      url: "/customers",
      icon: icons.IconShadow,
      breadcrumbs: false,
    },
  ],
};
