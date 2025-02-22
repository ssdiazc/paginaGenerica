const projectHostname = `${window.location.origin}`;
const projectName = `/paginaGenerica/`; // for prd
// const projectName = `/`;
export const projectBaseHref = `${projectHostname}${projectName}`;
const LocationsConstants = {
  bannerDestinationHomePageInfo: {
    horizontal: true,
    buttonSection: {
      label: 'Ver más',
      url: '/home',
      showButton: true,
    },
    title: 'Destinos',
  },
  destinationInfo: {
    data: [
      {
        title: 'Cuba',
        subtitle: 'La Habana',
        source: `${projectBaseHref}assets/Destinos/Havana.png`,
      },
      {
        title: 'Colombia',
        subtitle: 'Cartagena',
        source: `${projectBaseHref}assets/Destinos/Cartagena_1.png`,
      },
      {
        title: 'Estados Unidos',
        subtitle: 'New York',
        source: `${projectBaseHref}assets/Destinos/New_York_1.png`,
      },
      {
        title: 'R Dominicana',
        subtitle: 'Punta Cana',
        source: `${projectBaseHref}assets/Destinos/punta_cana_1.png`,
      },
      {
        title: 'México',
        subtitle: 'Cancún',
        source: `${projectBaseHref}assets/Destinos/cancun_1.png`,
      },
      {
        title: 'Estados Unidos',
        subtitle: 'Hawaii',
        source: `${projectBaseHref}assets/Destinos/hawaii_1.png`,
      },
      {
        title: 'Brasil',
        subtitle: 'Rio de Janeiro',
        source: `${projectBaseHref}assets/Destinos/r_janeiro_1.png`,
      },
    ],
  },
  bannerCircuitsHomePageInfo: {
    horizontal: true,
    title: 'Circuitos',
    data: [
      {
        title: 'Cuba',
        text: [
          {
            content:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, dolor.',
          },
          {
            prefix: 'Duración',
            content: '3 - 5 días',
          },
        ],
        button: {
          label: 'Ver más',
          url: '',
        },
        source: `${projectBaseHref}assets/Destinos/Havana.png`,
      },
      {
        title: 'Rio de Janeiro',
        text: [
          {
            content:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, dolor.',
          },
          {
            prefix: 'Duración',
            content: '3 - 5 días',
          },
        ],
        button: {
          label: 'Ver más',
          url: '',
        },
        source: `${projectBaseHref}assets/Destinos/r_janeiro_1.png`,
      },
      {
        title: 'Cancún',
        text: [
          {
            content:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, dolor.',
          },
          {
            prefix: 'Duración',
            content: '3 - 5 días',
          },
        ],
        button: {
          label: 'Ver más',
          url: '',
        },
        source: `${projectBaseHref}assets/Destinos/cancun_1.png`,
      },
    ],
  },
};

export default LocationsConstants;
