import { projectBaseHref } from './data-constants';

const HeaderConstants = {
  brand: {
    title: 'Aurum Travel',
    hasRef: false,
    logoLocation: `${projectBaseHref}assets/logos/logo_1.png`,
  },
  sections: [
    {
      title: 'Inicio',
      hasRef: true,
      ref: 'home',
      current: true,
    },
    {
      title: 'Hoteles',
      hasRef: false,
      ref: '/home',
    },
    {
      title: 'Circuitos',
      hasRef: false,
      ref: '/home',
    },
    {
      title: 'Actividades',
      hasRef: false,
      ref: '/home',
    },
  ],
};

export default HeaderConstants;
