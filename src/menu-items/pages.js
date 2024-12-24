// assets
import { IconKey, IconAsset, IconAssembly } from '@tabler/icons-react';

// constant
const icons = {
  IconKey,
  IconAsset,
  IconAssembly
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

export const pages = {
  id: 'pages',
  title: 'Pages',
  caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Authentication',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'login',
          title: 'Login',
          type: 'item',
          url: '/login',
          // target: true,
          icon: icons.IconAsset,
        },
        {
          id: 'register3',
          title: 'Register',
          type: 'item',
          url: '/register',
          // target: true,
          icon: icons.IconAssembly
        }
      ]
    }
  ]
};