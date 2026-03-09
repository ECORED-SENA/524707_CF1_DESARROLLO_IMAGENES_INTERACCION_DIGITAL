<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Diseño digital 

    .row.align-items-center.mb-5
      .col-xl
        p.mb-3 Al tratarse de un área relativamente reciente, las definiciones de #[b diseño digital] pueden abordarse desde distintas perspectivas, lo que dificulta establecer una definición única y ampliamente consensuada. Desde una primera aproximación, puede afirmarse que, en relación con el diseño gráfico tradicional, el diseño digital #[b nació y se desarrolló para ser utilizado en la virtualidad de Internet y en las aplicaciones digitales]. No obstante, esta interpretación deja por fuera aquellos diseños que se elaboran mediante programas informáticos, pero que están destinados al mundo físico o “real”.
        .style___box_3(data-aos="zoom-in")
          p.mb-0 Otra perspectiva asocia el diseño digital principalmente con los desarrollos orientados al #[b #[i marketing] digital], abarcando productos destinados a la publicidad digital como newsletters, banners, videos e infografías. Sin embargo, esta definición resulta limitada, ya que excluye otros productos que no están directamente relacionados con la publicidad, como la animación, la producción de contenidos digitales o la fotografía digital (retoque).
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img64.png', alt='').m-auto
    
    p.mb-5 De igual manera, el diseño digital puede entenderse como el enfoque encargado de #[b dar solución a problemas reales derivados de la interacción entre las personas y la presencia digital de las empresas], especialmente en el desarrollo de páginas web. A partir de estas aproximaciones, la definición que mejor se ajusta a los contenidos formativos del programa tecnológico #[b Técnico en Integración de Contenidos Digitales] es la siguiente:

    .row.align-items-center.m-0.style___box_3.fit___box_3(data-aos="zoom-in")
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img65.svg', alt='').m-auto
      .col-xl
        p.mb-0 El diseño digital comprende la creación de productos visuales como herramientas principales de los contenidos digitales, ya sea con fines publicitarios, informativos o de entretenimiento. Asimismo, se encarga de ofrecer soluciones orientadas a la mejora de la experiencia de los usuarios en Internet. El diseño digital crea y programa.
    
    .color___box_2
      .px-5

        <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
        Separador
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 El diseño web
        
        .row.align-items-center.mb-5
          .col-xl
            p.mb-3 El diseño web es un área del diseño digital que se encarga de desarrollar interfaces digitales, sitios y aplicaciones web, haciendo uso de lenguajes específicos como #[i HTML].
            .style___box_3.mb-3(data-aos="zoom-in")
              p.mb-0 El diseñador web tiene la misión de enlazar al usuario con el mundo informativo de manera eficaz y agradable. La hipermedia permite, además del acceso a la información, satisfacer los requerimientos y gustos de millones de navegantes. Por esta razón, resulta primordial contar con un criterio de diseño previo a la creación de un sitio web (Bustos, p. 29).
            p.mb-0 Es frecuente confundir los términos diseño web y desarrollo web. Aunque se encuentran estrechamente relacionados, sus propósitos son distintos.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img66.png', alt='').m-auto
        
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 4.
          span Diferencias entre diseño web y desarrollo web
        .tabla-a(data-aos="zoom-in").mb-5
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Diseño web
                th.texto-left Desarrollo web
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Cubre las fases del proyecto relacionadas con la navegación, la usabilidad, la interacción, la arquitectura de la información y la parte gráfica del sitio web.
                td.texto-left Corresponde a la programación necesaria para la construcción del sitio web.
              tr
                td.ajuste-border-tabla.texto-left Se enfoca en la experiencia del usuario y en la organización visual e interactiva del contenido.
                td.texto-left Se divide en la parte del cliente y la parte del servidor, que pueden estar conectadas o no.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Define cómo se presenta y se estructura la información para el usuario.
                td.texto-left Construye la lógica interna del sitio, las bases de datos y los mecanismos de seguridad.
    
    p.mb-5 En la #[b parte del cliente], se emplean #[i HTML] y #[i CSS] como código básico para la creación de páginas web, y #[i JavaScript] y #[i DOM] para la interacción con el usuario. En la #[b parte del servidor], se trabaja con lenguajes como #[i PHP, ASP.NET y JSP], los cuales permiten construir el #[i back-end], es decir, la parte del sitio que el usuario no percibe directamente. Su función principal es el diseño de bases de datos y la seguridad de la web.

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img67.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Cuando ambas partes se comunican, se habla de #[b programación cliente-servidor], lo que posibilita la interacción del usuario con los contenidos almacenados en bases de datos, el registro de nuevo contenido y la creación de cuentas de usuario (Barba, p. 8).

    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Principios del diseño web

    p.mb-5 Al diseñar un sitio web, es necesario considerar ciertos principios clave que permiten que el usuario pueda realizar correctamente las actividades y procesos previstos por el diseñador. Estos principios se conocen como #[b principios de diseño web].

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Navegabilidad")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img68.svg', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Navegabilidad
            p.mb-0 Se refiere a la forma en que el usuario se desplaza dentro de un sitio web, considerando la facilidad con la que puede realizar las acciones previstas. Un sitio navegable facilita la localización de la información y la orientación del usuario, y debe permitir responder con claridad a tres preguntas: ¿dónde estoy?, ¿dónde he estado? y ¿a dónde puedo ir?

      .py-3.py-md-4(titulo="Accesibilidad")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img69.svg', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Accesibilidad
            p.mb-0 Corresponde a la posibilidad de acceso a la página web y a sus contenidos por parte del mayor número de personas, independientemente de sus conocimientos, capacidades o discapacidades (físicas, intelectuales o técnicas), y sin depender de condicionantes tecnológicos específicos. Este principio es uno de los primeros en considerarse al crear un sitio web.
      
      .py-3.py-md-4(titulo="Usabilidad")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img70.svg', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Usabilidad
            p.mb-0 Uno de los investigadores más relevantes en este campo, #[b Jakob Nielsen], define la usabilidad como “todos aquellos procedimientos que persiguen mejorar la facilidad de uso para el usuario durante el proceso de navegación” (Nielsen, 2003), destacando la orientación al usuario como una de sus dimensiones más importantes.

    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Enfoques de la usabilidad

    p.mb-5 De acuerdo con Shackel (1991), la usabilidad contempla los siguientes aspectos:

    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .style___box_4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img71.svg', alt="" style="max-width: 100px").m-auto
            h4.text-center Eficacia
            p.mb-0 Relacionada con el desempeño en el cumplimiento de las tareas durante la interacción, considerando la rapidez y la cantidad de errores.
      .col-xl-3.col-md-9(data-aos="zoom-in").espacio___movil_3
        .style___box_4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img72.svg', alt="" style="max-width: 100px").m-auto
            h4.text-center Aprendizaje
            p.mb-0 Tiempo que requiere un usuario principiante para aprender a utilizar el sistema con un entrenamiento específico.
      .col-xl-3.col-md-9(data-aos="zoom-in").espacio___movil_3
        .style___box_4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img73.svg', alt="" style="max-width: 100px").m-auto
            h4.text-center Flexibilidad
            p.mb-0 Capacidad del sistema para adaptarse a diferentes tareas y entornos.
      .col-xl-3.col-md-9(data-aos="zoom-in").espacio___movil_3
        .style___box_4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img74.svg', alt="" style="max-width: 100px").m-auto
            h4.text-center Actitud
            p.mb-0 Niveles aceptables de costos humanos en términos de cansancio, molestia, frustración y esfuerzo personal.

    p.mb-5 Según Alcántara y Del Barrio (2016), la usabilidad presenta #[b dos facetas]:

    .color___box_2
      .px-5

        .row.justify-content-center.mb-0
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 5.
              span Usabilidad
            .tabla-a(data-aos="zoom-in").mb-4
              table
                caption Referencia Tabla - Norma APA
                thead
                  tr
                    th(colspan="2") Dos facetas
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Funcional
                    td.texto-left Relacionada con atributos como opciones de navegación visibles, navegación consistente, menús propios, tamaño del sitio web, ventanas emergentes, información del producto y estructura del diseño.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Estética
                    td.texto-left Vinculada al diseño visual y a las actitudes y emociones que este genera en el usuario.
        
            .style___box_3(data-aos="zoom-in")
              p.mb-0 Para Montaño y Montero (2015), la usabilidad también se asocia con los #[b métodos que mejoran la experiencia de uso] durante el diseño o rediseño de un sitio web, convirtiéndose en un aspecto de interés al aportar valor añadido mediante la gestión del #[i marketing].

        <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
        Separador
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.4 Arquitectura web
        
        p.mb-5 El diseño y la arquitectura de información de las páginas web son “el resultado de la actividad de clasificar, describir, estructurar y etiquetar los contenidos del sitio” (Leyva, Alarcón, Barrera y Ortegón, 2017). Antes de proyectar o diseñar una página web, es necesario seguir los lineamientos de la etapa de creación, tal como se presenta:

        .fondo___slider.mb-5
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Análisis de la información
                    p.mb-0 Es necesario hacer un análisis de la información que contendrá la página. Esto implica recolectar toda la información posible sobre el contenido, analizar a quién estará dirigida e identificar qué tipo de ideas y valores se quiere comunicar, valiéndose de herramientas tipográficas, el color y la composición, para que la ejecución sea simple y precisa.
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img75.png', alt='' style="max-width: 500px").m-auto
                
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Definición de objetivos
                    p.mb-0 Los objetivos fijados deben estar definidos, ya sea que se busque educar, informar o conducir a una acción de compra, donde la marca puede ser ya conocida y no requerir mayores preámbulos.
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img76.png', alt='' style="max-width: 500px").m-auto

                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Estructuración
                    p.mb-0 Para crear una estructura con toda la información y los elementos recopilados, es necesario conocer herramientas de diseño como el #[b #[i wireframe]] y el #[b #[i mockup]], las cuales permiten organizar textos, imágenes, botones e hipervínculos, así como las páginas con las que se enlazará el contenido, ofreciendo una idea cercana al resultado final.
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img77.png', alt='' style="max-width: 500px").m-auto
    
    p.mb-5 Para la estructuración visual inicial de un sitio web se emplean herramientas de bocetación como el #[i wireframe] y el #[i mockup]: 

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="<i> Wireframe</i>")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img78.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 #[i Wireframe]
            p.mb-0 Prototipo de una página web o de una aplicación que se realiza en una plantilla y que no incluye color, tipografía, imágenes ni gráficos. Puede realizarse a mano o en el computador y no contempla la funcionalidad de la web. Antes de la elaboración del layout (distribución y forma), se crea este esquema básico que permite entender cómo quedará el producto final. De esta manera pueden verificarse errores o aspectos negativos. El #[i Wireframe] se modifica las veces necesarias hasta llegar al resultado deseado.

      .py-3.py-md-4(titulo="<i>Mockup</i>")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img79.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 #[i Mockup]
            p Un #[i Mockup] es un bosquejo o prototipo que se utiliza en la fase final del desarrollo de sitios web y aplicaciones, y sirve para exhibir o probar un diseño y para conocer la opinión del cliente, los usuarios o consumidores.Esta maqueta, a diferencia del #[i Wireframe], integra todos los elementos que contendrá el diseño, acercándose mucho al diseño final.
            p.mb-0 Un #[i Mockup] clásico es estático. Sin embargo, las herramientas de maquetación permiten integrar funciones simples como enlaces. Dependiendo de la complejidad, pueden clasificarse como diseños de mediana o alta fidelidad y aproximarse a los prototipos. A diferencia de la maqueta estática, los prototipos son siempre interactivos y contienen la mayoría de las funciones de la página web o aplicación planificada.
    
    p.mb-5 La arquitectura web implica considerar si el resultado final será un sitio capaz de resolver las necesidades del negocio y servir a las de los clientes. El arquitecto web diseña y coordina el desarrollo de sitios web, los cuales constituyen una integración compleja de sistemas como bases de datos, servidores, redes y componentes de respaldo y seguridad. El desarrollo web requiere protocolos de comunicación entre dispositivos hardware, conocimientos de lenguajes de programación, estructuras de bases de datos, el protocolo TCP/IP, el lenguaje HTML y otros elementos técnicos.

    .row.align-items-center.mb-5
      .col-xl
        .style___box_3.mb-3(data-aos="zoom-in")
          p.mb-0 Las piezas esenciales de la arquitectura web son: servidores, bases de datos, redes, HTML, componentes de respaldo y seguridad, inteligencia de contenidos web, organización de componentes y organización de las llamadas entre páginas (#[i interlinking]).
        p.mb-3 El HTML es la pieza más relevante para los contenidos de este programa. Corresponde a la sigla #[i Hyper Text Markup Language] (Lenguaje de Marcas de Hipertexto) y es el principal lenguaje de marcación utilizado para el desarrollo de páginas web.
        p.mb-0 Según Next U (s.f.), el HTML es un lenguaje abstracto que utilizan las aplicaciones para representar documentos completos, como las páginas web, los cuales pueden transmitirse fácilmente a través de Internet. Los navegadores procesan e interpretan estos documentos mediante analizadores de HTML.
        
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img80.png', alt='').m-auto
    
    p.mb-5
      | El lenguaje HTML se define a partir de etiquetas delimitadas por los símbolos &lt; y &gt;, por ejemplo: &lt;etiqueta&gt;.
      | Estas etiquetas describen los elementos que se desean representar en una página web.
      | En &lt;title&gt;Internet básico, email, descargas y compras en línea&lt;/title&gt; la etiqueta title indica el título del documento.
    
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img15.svg" style="max-width: 60px").m-auto
      .col
        h3 Experiencia de usuario (UX)

    p.mb-5 Según Bigné, Ruiz y Andreu (2004), la experiencia del usuario se refiere a los factores que influyen en la exploración, la satisfacción y las intenciones de comportamiento o transacciones electrónicas futuras, tanto personales como externas, que pueden afectar la experiencia del usuario en una página web.

    .row.align-items-center.mb-5.m-0.style___box_5(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img81.png', alt='').m-auto
      .col-xl
        p.mb-0 Aunque guarda relación con la usabilidad, la experiencia de usuario abarca más aspectos. Según Jakob Nielsen (2003), la UX integra todos los aspectos de la interacción entre el usuario final y la compañía, sus servicios y productos. Incluye la relación usuario-producto y usuario-proveedor, y parte del reconocimiento de las necesidades exactas del cliente, seguido por la sencillez y la elegancia que caracterizan a los productos fáciles de usar.
    
    p.mb-5 Para crear una buena experiencia de usuario, el diseñador debe comprenderla y diseñarla de principio a fin, considerando no solo los aspectos estéticos y funcionales, sino también la psicología cognitiva, las necesidades del usuario y los requerimientos del negocio. Las percepciones del cliente sobre un producto o servicio están influenciadas por las experiencias y sensaciones vividas durante su uso. Una buena experiencia de usuario produce clientes satisfechos, dispuestos a pagar más por productos y servicios de calidad.

    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img15.svg" style="max-width: 60px").m-auto
      .col
        h3 Diseño de contenidos

    .row.align-items-center.mb-5
      .col-xl
        .style___box_6(data-aos="zoom-in")
          p.mb-0 El diseño de contenidos es un aspecto a tener en cuenta, aunque no se desarrolla con profundidad. #[b Sarah Winters], fundadora de Content Design of London, lo define como un planteamiento que comienza con la identificación de la necesidad del usuario para crear un conjunto de textos y elementos visuales que proporcionen una solución adecuada.
      .col-xl-auto(data-aos="zoom-in")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img82.jpg', alt='').m-auto
      .col-xl.espacio___movil_3
        figure.d-none.d-xl-block.mb-3(data-aos="fade-left")
          img(src='@/assets/curso/temas/img83.svg', alt='' style="max-width: 77px")
        p.mb-0 El diseño de contenidos no se limita a la escritura de contenidos útiles y funcionales, sino que identifica la mejor manera de presentarlos para satisfacer expectativas y necesidades, ya sea mediante infografías, videos, gráficos, folletos o artículos.
    
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img15.svg" style="max-width: 60px").m-auto
      .col
        h3 #[i Software] y herramientas de diseño digital
    
    p.mb-5 Las herramientas de diseño son elementos, formatos, medios o programas de computador que se utilizan para diseñar. Influyen en los procesos de producción, expresión y percepción de las ideas de diseño, por lo que deben aplicarse con habilidad.

    .row.align-items-center.m-0.style___box_3.fit___box_3_1(data-aos="zoom-in")
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img84.svg', alt='').m-auto
      .col-xl
        p.mb-0 Las nuevas ideas pueden surgir mediante la experimentación con herramientas y métodos actuales facilitados por la tecnología. La velocidad del avance tecnológico hace compleja la actualización permanente de las herramientas relacionadas con el diseño de contenidos para Internet.
          
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
