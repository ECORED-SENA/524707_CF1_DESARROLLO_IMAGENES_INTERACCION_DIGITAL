export default {
  global: {
    Name: 'Contenido digital',
    Description:
      'Los fundamentos del diseño gráfico y digital, del lenguaje audiovisual, las tipologías multimedia, la estrategia digital, entre otros, son elementos fundamentales para la comunicación visual de las ideas en entornos digitales. Más allá de un producto final, lo importante es entender el proceso de creación y los detalles que conforman cada composición, los cuales pueden aplicarse a casi cualquier tipo de proyecto.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Diseño',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Diseño gráfico',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Fundamentos del diseño',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Elementos del diseño gráfico',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Diseño digital ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'El diseño web',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Principios del diseño web',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Enfoques de la usabilidad',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Arquitectura web',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Lenguaje audiovisual',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Guion audiovisual',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: '<i>Storyboard</i> o guion gráfico',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Dirección de arte',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Estrategia digital',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: '<i>Marketing</i> digital',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Plan de medios digitales',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/524707_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Asimetría',
      significado:
        'cuando el equilibrio se consigue variando los elementos y ajustando las diversas fuerzas presentes en la composición visual.',
    },
    {
      termino: 'Boceto',
      significado:
        'se refiere a bosquejo o esquema que se realiza en un soporte análogo antes de concretar la producción de algo.',
    },
    {
      termino: 'Composición',
      significado:
        'consiste en disponer los distintos elementos gráficos dentro de un espacio visual, de tal manera que transmitan de forma objetiva un mensaje a los receptores de este.',
    },
    {
      termino: 'Diseño',
      significado:
        'es una manera de organizar las ideas para plasmarlas en una comunicación de tipo visual.',
    },
    {
      termino: 'Encuadre',
      significado:
        'el objetivo capta aquel espacio de la realidad que se quiere tomar y que posteriormente se proyectará.',
    },
    {
      termino: 'Equilibrio',
      significado:
        'cuando al dividir una composición en dos partes iguales no existen las mismas dimensiones en tamaño, color y peso, pero existe un equilibrio entre los elementos.',
    },
    {
      termino: 'Guion literario',
      significado:
        'narración argumental del filme que contiene los personajes, los decorados, la ambientación, el vestuario, así como los diálogos y el "off".',
    },
    {
      termino: 'Guion técnico',
      significado:
        'especifica lo que se ha de ver y se ha de escuchar durante la proyección del filme y en el mismo orden en que aparecerá en la pantalla.',
    },
    {
      termino: 'Jerarquía',
      significado:
        'la jerarquía es el valor y peso visual que se le da a un elemento en un diseño. No necesariamente es lo que se observa primero, pero sí la importancia que se le da. Se jerarquizan los elementos con base en varios valores, peso, color y disposición en el formato.',
    },
    {
      termino: 'Simetría',
      significado:
        'es la disposición espacial regular y equilibrada de los elementos que forman la composición gráfica. Entrega a los diseñadores gráficos una serie de procedimientos para proyectar controladamente.',
    },
    {
      termino: 'Tipografía, fuente o estilo de letra',
      significado: 'también llamadas tipos o fuentes tipográficas.',
    },
    {
      termino: 'Vectores',
      significado:
        'tipo de gráfico también llamado de objetos, en los que las formas se representan como series de líneas y curvas con atributos asignados de relleno y contorno.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alcántara Pilar, J. y Barrio-García, S. (2016). El papel moderador del diseño web y la cultura del país en la respuesta del consumidor online: una aplicación a los destinos turísticos. European Research on Management and Business Economics, 22(2), 78-87.',
      link: '',
    },
    {
      referencia: 'Ambrose - Harris (2007). Fundamentos de la tipografía.',
      link: '',
    },
    {
      referencia:
        'Arrieta León, Ana María (2013). Principios de la composición.',
      link: '',
    },
    {
      referencia:
        'Barba Soler, J. P. Diseño y Desarrollo Web. Análisis de Casos.',
      link: '',
    },
    {
      referencia:
        'Bigné, E., Ruiz, C. y Andreu, L. (2004). Conceptualización del comportamiento del consumidor en los entornos virtuales: un análisis cualitativo. Estudios sobre Consumo, (70), 9-20.',
      link: '',
    },
    {
      referencia:
        'Bustos Rojo, Gabriela (2012). Teorías del diseño gráfico. Red Tercer Milenio.',
      link: '',
    },
    {
      referencia:
        'Eisenstein, Sergei (1999). La Forma del cine. México. Siglo XXI.',
      link: '',
    },
    {
      referencia:
        'Moreno Villa, M. (2003). Filosofía vol. II Antropología, Psicología y Sociología. MAD.',
      link: '',
    },
    {
      referencia:
        'Nielsen, J. (2003). Usability 101: Introduction to usability. Nielsen Norman Group.',
      link: '',
    },
    {
      referencia:
        'Pereiro, G. (2007). La evolución es creatividad: el pensamiento circular. Kier.',
      link: '',
    },
    {
      referencia:
        'Shackell, B. (2009). Usability - context, framework, design and evaluation. Interacting with Computers, 21(5-6), 339-346.',
      link: '',
    },
    {
      referencia:
        'Valero Muñoz, A. (2012). Principios de color y holopintura. Editorial Club Universitario.',
      link: '',
    },
    {
      referencia:
        'Wong, W. (1991). Fundamentos del diseño bi- y tri-dimensional. Editorial Gustavo Gili.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paulo César Hernández G.',
          cargo: 'Experto temático',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fredy Fabian Ortiz Segura',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
