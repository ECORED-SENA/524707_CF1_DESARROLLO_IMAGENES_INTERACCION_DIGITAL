<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Diseño
    
    p.mb-5 La comunicación es una necesidad innata en los humanos como seres sociales y constituye una herramienta fundamental para la vida en comunidad. A lo largo de la historia de la humanidad, la comunicación ha permitido que se gesten todos los desarrollos que conforman el mundo actual. En las distintas épocas históricas, los formatos (verbales y no verbales) y los canales en los que se produce la comunicación se han ido ajustando a los fines para los cuales se comunica. Sin embargo, el propósito fundamental continúa siendo el mismo: #[b transmitir ideas de un emisor a un receptor con una intención determinada].

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El diseño surge como una manera de organizar las ideas para plasmarlas en una comunicación de tipo visual. Puede aplicarse en múltiples áreas, entre las que se encuentran el diseño gráfico, de interiores, arquitectónico, industrial, de modas, editorial, publicitario, artístico, diseño digital y diseño web, entre otros. Debido a su relación con tantas áreas, el diseño puede definirse como #[b toda acción creadora que persigue una finalidad].

    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Diseño gráfico

    p.mb-5 El desarrollo del diseño gráfico como campo creativo específico puede comprenderse a partir del estudio de su trayectoria histórica. La comunicación gráfica ha acompañado al ser humano desde tiempos remotos y ha evolucionado de acuerdo con los contextos sociales, culturales y tecnológicos de cada época. A continuación, se presenta cronológicamente el desarrollo del diseño gráfico, integrando los principales acontecimientos y movimientos que aportaron a su consolidación.

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Prehistoria
                p.mb-0 La comunicación gráfica se remonta a las pinturas rupestres. En sus inicios, consistía en trazos realizados en cavernas, asociados principalmente a significados de carácter religioso.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img2.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Antiguo Egipto
                p.mb-0 Los antiguos egipcios se comunicaban mediante jeroglíficos tallados en piedra. Posteriormente, emplearon otros soportes como el papiro, lo que facilitó la transmisión de información.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img3.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Edad Media
                p.mb-0 Las obras escritas alcanzaron un mayor poder comunicativo gracias al uso del color, las ilustraciones y otros elementos gráficos utilizados de manera armoniosa y equilibrada dentro del documento.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img4.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Siglo XV (1440)
                p.mb-0 Durante la primera mitad del siglo XV aparece la imprenta, inventada por el alemán #[b Johannes Gutenberg], lo que permitió agilizar y masificar la elaboración de documentos, así como ampliar el alcance de sus mensajes.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img5.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Siglo XIX
                p.mb-0 A finales del siglo XIX, la Revolución Industrial provocó profundos cambios en el desarrollo tecnológico. Surge la necesidad de contar con un estilo propio que represente la idiosincrasia de cada región, dando origen al Modernismo.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img6.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Modernismo (1918 - 1933)
                p.mb-0 Conocido también como Art #[i Nouveau]. Según Droste (2006), este movimiento buscó integrar el arte con la vida cotidiana, utilizando elementos de la naturaleza para otorgar protagonismo al componente orgánico.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img7.png', alt='' style="max-width: 500px").m-auto
                
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Bauhaus (1919 - 1933)
                p.mb-0 En 1919 #[b Walter Gropius] creó la escuela #[b Bauhaus], la cual se convirtió en el motor y modelo ejemplar de la reforma de la formación artística antiacadémica de la República de Weimar (1918 - 1933). La Bauhaus combinó diseño, arte y arquitectura, y estudió la forma, el color, los materiales, la composición y el espacio, bajo la influencia del constructivismo. La escuela cerró sus puertas en Berlín en 1933 (p. 15).
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img8.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Art déco (1925)
                p.mb-0 Mientras en Alemania se desarrollaba la Bauhaus, en Francia surgió el movimiento Art déco, el cual se dio a conocer en la Exposición Internacional de las Artes Decorativas e Industriales Modernas de 1925.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img9.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 La época del diseño en Estados Unidos (década de 1940)
                p.mb-0 La época del diseño en Estados Unidos se inició en los años cuarenta y estuvo fuertemente influenciada por las raíces europeas, debido a la llegada de emigrantes europeos como consecuencia de la Segunda Guerra Mundial. Estos aportes se convirtieron en una referencia importante para el diseño actual.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img10.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Diseño gráfico contemporáneo
                p.mb-0 En la actualidad, el diseño gráfico forma parte de la vida cotidiana y está presente en todas las áreas de la comunicación. Con la aparición de Internet en la década de 1980, su evolución se aceleró gracias al uso de computadores y programas informáticos gráficos, los cuales transformaron el papel en pantalla y ofrecieron a los diseñadores nuevas posibilidades de experimentación con el texto y la imagen. Este proceso permitió el surgimiento de nuevas corrientes y especialidades, como la creación y el diseño de páginas web.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img11.png', alt='' style="max-width: 500px").m-auto

    .row.align-items-center
      .col-xl
        .style___box_1(data-aos="fade-right")
          p.mb-0 Después de este recorrido histórico, es importante señalar que, a pesar de la relación entre todos estos acontecimientos, resulta complejo establecer una fecha exacta para la aparición del diseño tal como se conoce en la actualidad.
      .col-xl-auto(data-aos="zoom-in")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img12.jpg', alt='').m-auto
      .col-xl
        figure.d-none.d-xl-block.mb-2(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img13.svg', alt='' style="max-width: 55px")
        p.mb-0.espacio___movil_3 Pese a todas las transformaciones tecnológicas y sociales, #[b las bases del diseño gráfico continúan siendo las mismas que comenzaron a estructurarse hace más de cien años], aunque enriquecidas progresivamente a través del tiempo y gracias al desarrollo tecnológico.
        
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Fundamentos del diseño

    .row.align-items-center.mb-5
      .col-xl
        p.mb-3 El diseño gráfico, entendido como disciplina, tiene como propósito #[b transmitir un mensaje definido] mediante elementos visuales que responden a parámetros establecidos. Estos parámetros se sustentan en fundamentos artísticos cuyo objetivo es generar sensaciones visuales placenteras que permitan establecer la conexión deseada entre quien comunica y quien interpreta el mensaje.
        p.mb-0.espacio___movil_3 Con el fin de facilitar la comprensión de los múltiples aspectos que conforman un campo tan amplio como el diseño gráfico, se establece una diferenciación entre los aspectos conceptuales y los aspectos prácticos. Los aspectos conceptuales se abordan como #[b fundamentos], ya que permiten una visión global de los productos diseñados; dentro de estos se incluyen la composición, el color y las leyes del diseño. Por su parte, los aspectos técnicos se desarrollan posteriormente y se identifican como #[b elementos].
      .col-xl-auto(data-aos="zoom-in")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img14.png', alt='').m-auto

    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img15.svg" style="max-width: 60px").m-auto
      .col
        h3 La composición
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img16.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La composición puede interpretarse como la conceptualización inicial que da origen al diseño, entendiendo este como un producto orientado a un fin determinado. Se relaciona directamente con la organización y disposición de los elementos dentro del espacio visual, con el propósito de construir una imagen que comunique una idea de forma sencilla y directa a un público objetivo.
    
    p.mb-5 En este sentido, la composición establece la relación entre el tamaño, las texturas, los colores, los pesos visuales, la escala, las cantidades y todos los elementos que se integran en una propuesta gráfica. A partir de esta organización se estructura el mensaje visual que se desea comunicar. A continuación, se presentan los #[b principios de la composición], los cuales orientan la correcta organización de los elementos gráficos.

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Variedad
                p.mb-0 Se refiere a los distintos elementos (forma, color, ilustración, fotografía, entre otros) que incorpora el diseñador en una composición con el propósito de captar el interés mediante el uso de componentes contrastantes.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img18.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Jerarquía
                p.mb-3 Se relaciona con el tamaño de los elementos y su vínculo con el resto, así como con el color y la disposición, con el fin de generar una condición de subordinación. Presenta tres subtipos:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-1
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Alineación]: los elementos ubicados a la derecha o en el margen inferior poseen mayor fuerza visual que aquellos situados a la izquierda o en la parte superior, ya que generan una sensación más liviana.
                  li.mb-1
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Color]: los colores vivos poseen mayor fuerza y generan un impacto visual superior al de los colores pastel, pálidos o tenues.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Escala]: se presenta cuando existe una relación matemática (proporción) entre las dimensiones de los distintos elementos, la cual puede expresarse mediante un número o una fórmula.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img19.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Unidad
                p.mb-0 El valor de la unidad radica en que cada elemento se organiza, se relaciona y genera fuerza y tensión, representando un conjunto integrado. La unidad puede lograrse por continuidad, repetición, continuación o proximidad.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img20.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Contraste
                p.mb-0 Corresponde a la distinción entre uno o varios elementos para marcar una diferencia que permita resaltar aquello que se considera relevante. El contraste puede generarse por color, forma, tamaño y tipografía; por ejemplo, las formas angulares y alargadas amplían el campo visual y generan un efecto de magnificencia, mientras que las formas cortas transmiten humildad.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img21.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ritmo
                p.mb-0 Consiste en la repetición regular de un patrón con el propósito de lograr armonía en la composición. El ritmo puede desarrollarse de forma regular o progresiva.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img22.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Equilibrio
                p.mb-3 Hace referencia a la armonía entre los elementos, de tal manera que ninguno predomine dentro del plano. Existen dos tipos de equilibrio:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-1
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Simetría]: a partir de un eje o plano se organizan elementos en relación exacta de forma, tamaño y posición, formando partes iguales pero contrapuestas.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Asimetría]: corresponde a una composición en la que una parte tiene mayor peso visual que las demás. Generalmente genera composiciones llamativas e incluso puede producir resultados más dinámicos que la simetría. Presenta tres tipos: reflexión, rotación y traslación.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img23.png', alt='' style="max-width: 500px").m-auto
                
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Proporción áurea
                p.mb-0 También denominada número áureo o divina proporción, corresponde al valor 1.618. Este número surge de la sucesión de Fibonacci, en la cual cada número resulta de la suma de los dos anteriores. Se asocia con patrones presentes en la naturaleza y ha sido aplicado en el arte y la pintura a lo largo de la historia. El uso de este principio favorece una proporción más armónica y visualmente agradable.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img24.png', alt='' style="max-width: 500px").m-auto

    p.mb-5 Después de revisar estos principios, es importante señalar que #[b cada uno posee una relevancia particular dentro de la composición]. Su estudio y aplicación conjunta permiten que el diseño logre transmitir de manera efectiva el mensaje previamente definido, fortaleciendo la claridad comunicativa y la coherencia visual del producto gráfico.

    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img15.svg" style="max-width: 60px").m-auto
      .col
        h3 La teoría del color

    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="zoom-in")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img25.png").m-auto
      .col-xl
        .row.align-items-center.mb-3
          .col-xl-auto(data-aos="zoom-in")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img26.svg").m-auto
          .col-xl
            p.mb-0 Para abordar la teoría del color es necesario referirse primero a la #[b percepción], ya que el color, en sí mismo, no existe como entidad material. Se trata de un atributo de los objetos que solo se manifiesta en presencia de la luz y que se genera como resultado de la diferencia en la percepción del ojo humano frente a distintas longitudes de onda. Este fenómeno recibe el nombre de #[b espectro de la luz blanca].
        p.mb-0 El color es el resultado de la descomposición de la luz blanca. Un rayo de luz blanca, proveniente del sol, al atravesar un prisma se descompone en varios colores. A este fenómeno se le denomina color luz y corresponde al efecto óptico de la reflexión de la luz sobre los cuerpos, que al llegar a la retina permite captar estímulos que posteriormente son interpretados como color por el cerebro (Hernández Rentería, 1976, p. 8).
    
    .style___box_1.mb-5(data-aos="zoom-in")
      p.mb-0 En la retina existen unas células denominadas #[b conos], las cuales reaccionan de manera diferente según la longitud de onda de la radiación que reciben. Esta reacción se explica porque los conos contienen distintas sustancias sensibles a determinadas longitudes de onda, aunque también presentan una respuesta, en menor grado, frente a longitudes de onda cercanas, tanto superiores como inferiores.
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img27.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La percepción del color implica que las ondas luminosas lleguen a los ojos, donde se transforman en impulsos nerviosos que son enviados al cerebro para su interpretación, generando así la sensación cromática (UCA, s.f., p. 15).
    
    p.mb-5 En este contexto, #[b Isaac Newton] descubrió que la luz blanca del sol, al ser refractada (es decir, al cambiar de dirección al pasar de forma oblicua de un medio a otro con diferente densidad), se divide en los distintos colores que la componen. Cada uno de estos colores presenta una frecuencia de luz diferente, determinada por una mayor o menor desviación durante el proceso de refracción. Para comprender este fenómeno, se recurre al ejemplo del prisma de cristal, recurso fundamental para explicar la descomposición de la luz blanca en el espectro cromático.

    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 1.
          span Newton y el espectro de color
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img28.svg', alt='Ilustración científica sobre la descomposición de la luz blanca mediante un prisma y la formación del espectro cromático.').m-auto

    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Tipos de teoría del color

    .color___box_1
      .px-5

        p.mb-5 Respecto a la teoría del color, se puede hablar de #[b dos tipos]: la #[b síntesis aditiva] y la #[b síntesis sustractiva]. Ambas explican la forma en que se generan los colores a partir de la combinación de otros, según el comportamiento de la luz o de los pigmentos.

        .row.justify-content-center.mb-5
          .col-xl-10  
            AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
              .row(titulo="Teoría de la síntesis aditiva").ajuste-cajaAcordion
                p.mb-3 Según #[b Isaac Newton], los colores rojo, verde y azul componen la luz blanca y no pueden producirse mediante la mezcla de ningún otro color. Por esta razón, se consideran #[b colores primarios o colores RGB] (abreviatura del inglés #[i Red, Green, Blue]).
                p.mb-3 A partir de la combinación de dos colores primarios se obtienen los #[b colores secundarios o colores aditivos secundarios], que corresponden al cian, el magenta y el amarillo. La combinación de los tres colores primarios produce el color blanco, mientras que la combinación de los tres colores secundarios da como resultado el color negro. La combinación de un color primario y uno secundario genera los #[b colores terciarios].
                .ajuste___tabla_acordion
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Tabla 1.
                    span Síntesis aditiva
                  .tabla-a.mb-5
                    table
                      thead
                        tr
                          th.ajuste-border-tabla.texto-left Aspecto
                          th.texto-left Síntesis aditiva
                      tbody
                        tr
                          td.ajuste-border-tabla.texto-left Colores primarios
                          td.texto-left Rojo, verde y azul (RGB).
                        tr.ajuste-color-tabla
                          td.ajuste-border-tabla.texto-left Colores secundarios
                          td.texto-left Cian, magenta y amarillo.
                        tr
                          td.ajuste-border-tabla.texto-left Mezcla de primarios
                          td.texto-left Produce el color blanco.
                        tr.ajuste-color-tabla
                          td.ajuste-border-tabla.texto-left Mezcla de secundarios
                          td.texto-left Produce el color negro.
                        tr
                          td.ajuste-border-tabla.texto-left Ámbito de aplicación
                          td.texto-left Televisores y monitores.
                        tr.ajuste-color-tabla
                          td.ajuste-border-tabla.texto-left Modelos de color
                          td.texto-left RGB, VGA, LAB, CIE XYZ, entre otros.
                  .row.justify-content-center.mb-3
                    .col-xl-6
                      .titulo-sexto.color-acento-contenido.mb-2
                        h5 Figura 2.
                        span Síntesis aditiva del color (modelo RGB)
                      figure
                        img(src='@/assets/curso/temas/img30.svg', alt='Diagrama del modelo de color RGB con la combinación de rojo, verde y azul para generar otros colores y el blanco. ' style="width: 350px").m-auto
              .row(titulo="Teoría de la síntesis sustractiva").ajuste-cajaAcordion
                p.mb-3 La teoría de la #[b síntesis sustractiva] se basa en la mezcla de pigmentos o materiales que absorben parte de la luz y reflejan el resto. En este modelo, los #[b colores primarios] son el cian, el magenta y el amarillo, conocidos como colores #[b CMY].
                p.mb-3 La combinación de dos colores primarios sustractivos genera colores secundarios. Cuando se mezclan los tres colores primarios sustractivos se obtiene un color oscuro, cercano al negro, debido a la absorción casi total de la luz. Al igual que en la síntesis aditiva, la combinación de un color primario y uno secundario produce colores terciarios.
                .ajuste___tabla_acordion
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Tabla 2.
                    span Síntesis sustractiva
                  .tabla-a.mb-5
                    table
                      thead
                        tr
                          th.ajuste-border-tabla.texto-left Aspecto
                          th.texto-left Síntesis sustractiva
                      tbody
                        tr
                          td.ajuste-border-tabla.texto-left Colores primarios
                          td.texto-left Cian, magenta y amarillo (CMY).
                        tr.ajuste-color-tabla
                          td.ajuste-border-tabla.texto-left Mezcla de primarios
                          td.texto-left Produce un color oscuro cercano al negro.
                        tr
                          td.ajuste-border-tabla.texto-left Formación de secundarios
                          td.texto-left Resultado de la combinación de dos primarios.
                        tr.ajuste-color-tabla
                          td.ajuste-border-tabla.texto-left Colores terciarios
                          td.texto-left Combinación de un primario y un secundario.
                        tr
                          td.ajuste-border-tabla.texto-left Ámbito de aplicación
                          td.texto-left Procesos gráficos y reproducción impresa.
                p.mb-3 Este aspecto permite ampliar la comprensión sobre el significado y los usos del color. Sin embargo, para su correcta aplicación en el diseño gráfico, es necesario comprender las #[b propiedades del color], las cuales se abordan a continuación.
                .ajuste___tabla_acordion
                  .row.justify-content-center.mb-3
                    .col-xl-6
                      .titulo-sexto.color-acento-contenido.mb-2
                        h5 Figura 3.
                        span Síntesis sustractiva del color (modelo CMY)
                      figure
                        img(src='@/assets/curso/temas/img31.svg', alt='Diagrama del modelo de color CMY basado en la mezcla de cian, magenta y amarillo en procesos de impresión.' style="width: 350px").m-auto

    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Propiedades del color
    
    p.mb-5 Este aspecto permite ampliar la comprensión sobre el significado y usos del color. Sin embargo, para su correcta aplicación es necesario comprender las #[b propiedades del mismo], las cuales permiten analizar y seleccionar los colores de manera adecuada dentro del diseño gráfico. Las propiedades del color permiten diferenciar, clasificar y utilizar los colores de forma consciente dentro de una composición visual.

    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 4.
          span Propiedades del color
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img32.png', alt='Esquema conceptual sobre tono, brillo o luminosidad y saturación del color. ').m-auto
    
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .style___box_2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img33.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Tono
            p.mb-0 Es la cualidad propia del color que permite diferenciarlo de otro y constituye el medio por el cual se distingue ópticamente un color. Cada tono corresponde a un color específico. Existen tonos cálidos y tonos fríos.
      .col-xl-4.col-md-9(data-aos="zoom-in").espacio___movil_3
        .style___box_2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img34.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Brillo o luminosidad
            p.mb-0 Corresponde a la intensidad lumínica de un color, determinada por su cercanía al blanco o al negro, lo que permite ganar claridad u oscuridad dentro de un mismo tono.
      .col-xl-4.col-md-9(data-aos="zoom-in").espacio___movil_3
        .style___box_2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img35.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Saturación
            p.mb-0 Representa la intensidad o palidez de un tono y se relaciona con la pureza del color respecto del gris. A mayor presencia de gris, menor saturación del color.

    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Uso del color en el diseño
    
    p.mb-5 Ahora bien, el uso del color en el diseño se fundamenta en la selección adecuada de los colores con el propósito de generar en el receptor un efecto determinado. Este proceso contempla diversos aspectos relacionados con el significado simbólico y emocional de cada color, los cuales se desarrollan a continuación.

    .color___box_2
      .px-5

        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 3.
              span Tiempos de escaldado de verduras
            .tabla-a(data-aos="zoom-in")
              table
                caption Referencia Tabla - Norma APA.
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Color
                    th.texto-left Tiempo de escaldado en agua hirviendo
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Rojo
                    td.texto-left El color de todas las pasiones, del amor al odio. El color de los reyes y del comunismo, de las alegrías y del peligro (Heller, 2008, p. 51). Expresa peligro, pasión, dinamismo, calidez y agresividad. Aunque puede causar fatiga, se utiliza por su alta capacidad para atraer la atención.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Naranja
                    td.texto-left Color de la diversión y del budismo. Exótico y llamativo, pero subestimado (Heller, 2008, p. 179). Se asocia con la juventud y surge de la mezcla del rojo y el amarillo, colores opuestos en muchos de sus significados. Es un color singular que puede alterar la percepción.
                  tr
                    td.ajuste-border-tabla.texto-left Amarillo
                    td.texto-left El color más contradictorio, asociado tanto al optimismo como a los celos, la diversión y la traición. El amarillo del oro y el amarillo del azufre (Heller, 2008, p. 83). Es el color más brillante de los cálidos, energizante, alegre, estimulante y expansivo, vinculado con la acción, el poder y la liberación.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Verde
                    td.texto-left El color de la fertilidad, la esperanza y la burguesía. Verde sagrado y verde venenoso. El color intermedio (Heller, 2008, p. 103). Es relajante y refrescante, asociado con la serenidad, la armonía, la naturaleza, la vida y la buena salud. Es un color muy variable, ya que pequeñas variaciones cromáticas no alteran su identidad.
                  tr
                    td.ajuste-border-tabla.texto-left Azul
                    td.texto-left Uno de los colores preferidos; asociado con la simpatía, la armonía y la fidelidad, a pesar de ser frío y distante. Del azul real al azul de los tejanos (Heller, 2008, p. 17). Inspira confianza y se relaciona con la estabilidad, la paz y la calma, aunque también puede asociarse con la tristeza o la frialdad.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Violeta
                    td.texto-left Del púrpura del poder al color de la teología, la magia, el feminismo y el movimiento gay (Heller, 2008, p. 191). Se vincula con la nobleza, el lujo, la sabiduría y la espiritualidad.
                  tr
                    td.ajuste-border-tabla.texto-left Negro
                    td.texto-left El color del poder, la violencia y la muerte. El favorito de los diseñadores y de la juventud. El color de la negación y de la elegancia (Heller, 2008, p. 125). Simboliza misterio, poder, sofisticación y elegancia, aunque también puede evocar tristeza e ira.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Blanco
                    td.texto-left Representa lo femenino y la inocencia. El color del bien y de los espíritus. El color más importante de los pintores (Heller, 2008, p. 153). En la cultura occidental también puede simbolizar esterilidad y frío, mientras que en otras culturas adquiere significados opuestos.

    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 El círculo cromático
    
    p.mb-5 Una vez comprendido el uso y significado de cada color, resulta necesario conocer su base estructural, la cual se representa mediante el #[b círculo cromático]. Este se define como un esquema gráfico con forma circular que permite organizar los colores primarios y secundarios.

    .row.align-items-center.mb-5.style___box_3.m-0(data-aos="zoom-in")
      .col-xl-auto(data-aos="fade-right")     
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img37.svg").m-auto
      .col-xl
        p.mb-0 En el círculo cromático, los colores ubicados de forma opuesta reciben el nombre de #[b colores complementarios]. Estos se definen como aquellos que no contienen ninguna proporción del color contrario. De este modo, el color complementario del azul cian es el rojo; el del magenta es el verde; y el del amarillo es el violeta.
    
    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Figura 5.
      span Círculo cromático
    figure(data-aos="zoom-in").mb-5
      img(src='@/assets/curso/temas/img38.svg', alt='Diagrama comparativo del círculo cromático, compuesto por dos secciones: a la izquierda, círculo cromático básico con seis colores identificados (azul, violeta, rojo, naranja, amarillo y verde); a la derecha, círculo cromático compuesto con un esquema de colores primarios superpuestos y un círculo cromático completo con gradación continua de tonalidades.').m-auto

    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Armonía del color y fórmulas de combinación
    
    p.mb-5 Existen fórmulas basadas en el concepto de #[b armonía del color], las cuales se obtienen mediante el uso del #[b círculo cromático].

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Complementarios
                p.mb-0 Son colores opuestos dentro del círculo cromático, como azul y naranja, o el clásico rojo y verde. Para evitar que la paleta resulte demasiado simple, se pueden agregar tonos más claros, más oscuros o con menor saturación.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 6.
                  span Colores complementarios
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img39.png', alt='Esquema cromático con pares de colores opuestos dentro del círculo cromático. ' style="max-width: 500px")
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Tríada
                p.mb-0 Se forma al trazar un triángulo dentro del círculo cromático y utilizar los colores ubicados en cada uno de sus vértices. Estas combinaciones suelen ser impactantes, especialmente cuando se emplean colores primarios y secundarios, por lo que se debe reflexionar cuidadosamente antes de elegirlas.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 7.
                  span Combinación cromática en tríada
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img40.png', alt='Diagrama del círculo cromático con tres colores equidistantes formando una tríada. ' style="max-width: 500px")

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Análoga
                p.mb-0 Se seleccionan colores consecutivos dentro del círculo cromático, como los rojos y anaranjados, o los azules y verdes.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 8.
                  span Combinación cromática análoga
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img41.png', alt='Esquema de combinación de colores consecutivos dentro del círculo cromático. ' style="max-width: 500px")
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Complementarios divididos
                p.mb-0 Se utilizan los colores ubicados junto al color complementario. Esta combinación mantiene el contraste, pero ofrece más opciones tonales y resultados más interesantes.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 9.
                  span Colores complementarios divididos
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img42.png', alt='Diagrama cromático con un color base y los tonos adyacentes a su complementario. ' style="max-width: 500px")
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Tetraédrica
                p.mb-0 Forma un rectángulo dentro del círculo cromático y emplea dos pares de colores complementarios. Esta fórmula funciona mejor cuando se define un color dominante y los otros tres actúan como auxiliares.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 10.
                  span Combinación cromática tetraédrica
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img43.png', alt='Esquema del círculo cromático con dos pares de colores complementarios formando un rectángulo. ' style="max-width: 500px")

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Monocromática
                p.mb-0 Se utiliza un solo color y, mediante la variación del brillo y la saturación, se generan diferentes tonos, garantizando coherencia en la combinación.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 11.
                  span Combinación cromática monocromática
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img44.png', alt='Diagrama de variaciones de brillo y saturación a partir de un solo color.' style="max-width: 500px")

    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img15.svg" style="max-width: 60px").m-auto
      .col
        h3 Leyes del diseño gráfico

    p Otro aspecto conceptual del diseño corresponde a las #[b leyes o reglas] que se aplican al diseño y a la composición. Estas leyes se derivan de diversos estudios sobre la #[b percepción y la psicología humana], y explican la forma en que las personas organizan, interpretan y dan sentido a los estímulos visuales dentro de una composición.
    p.mb-5 A continuación, se presentan las principales leyes aplicadas al diseño gráfico y a la composición visual.

    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ley de tercios
                p.mb-0 Consiste en dividir la imagen mediante dos líneas horizontales y dos verticales equidistantes, obteniendo nueve partes iguales. Los puntos de intersección, conocidos como puntos fuertes o calientes, se utilizan para ubicar los elementos que se desean destacar dentro de la composición. Según esta ley, los objetos no deben ubicarse únicamente en el centro, sino en los puntos fuertes, lo que incrementa el peso visual y genera una composición más equilibrada.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 12.
                  span Ley de tercios
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img45.png', alt='Esquema compositivo con cuadrícula de nueve secciones y puntos fuertes de interés visual.' style="max-width: 500px")
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ley de horizonte
                p.mb-0 Deriva de la ley de tercios. Consiste en dividir la imagen en tres franjas horizontales iguales y definir cuál de ellas se desea resaltar dentro de la composición.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 13.
                  span Ley de horizonte
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img46.png', alt='Diagrama compositivo dividido en tres franjas horizontales para jerarquización visual. ' style="max-width: 500px")

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Leyes de la Gestalt
                p.mb-0 Sostienen la fascinación por la forma y la materia, permitiendo dominar y deducir incluso aquello que se encuentra detrás de la forma. En la Alemania de los años veinte, un grupo de psicólogos desarrolló una serie de teorías sobre la percepción visual humana, basadas en el principio de que el todo es más que la suma de las partes. Estas leyes explican el origen de las percepciones a partir de los estímulos y se fundamentan en pruebas y resultados estadísticos que, aunque no son unívocos, evidencian tendencias fuertes (Pereiro, 2007, p. 44).
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 14.
                  span Leyes de la Gestalt
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img47.png', alt='Gráfico perceptivo asociado a principios gestálticos de organización visual. ' style="max-width: 500px")
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ley de figura-fondo
                p.mb-0 Es la más general de las leyes de la Gestalt. Parte del hecho de que, en el proceso perceptivo, se tiende a centrar la atención en un objeto o grupo de objetos (figura), mientras los elementos que los rodean se perciben como fondo. En algunos casos, figura y fondo pueden intercambiar sus roles, generando una relación reversible o ambigua.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 15.
                  span Ley de figura-fondo
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img48.png', alt='Imagen perceptiva con diferenciación entre elemento principal y fondo. ' style="max-width: 500px")
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ley de la buena forma
                p.mb-0 También conocida como #[b pregnancia], se basa en la observación de que el cerebro humano presenta una tendencia natural a la simplificación, la simetría, el equilibrio y el orden, organizando la información de la manera más simple y estructurada posible (Moreno, 2003, p. 236).
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 16.
                  span Ley de la buena forma (pregnancia)
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img49.png', alt='Gráfico perceptivo relacionado con simplificación, simetría y orden visual. ' style="max-width: 500px")

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ley de cierre
                p.mb-0 El ser humano tiende a completar las formas a partir del todo. Cuando un objeto está incompleto o un espacio no se encuentra completamente cerrado, el cerebro percibe la figura como si estuviera completa.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 17.
                  span Ley de cierre
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img50.png', alt='Gráfico perceptivo sobre la tendencia a completar formas incompletas. ' style="max-width: 500px")
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ley del contraste
                p.mb-0 Se fundamenta en que los elementos no se perciben de forma aislada, sino en relación con otros. Existe una tendencia a identificar aquel elemento que sobresale del conjunto. El contraste puede generarse por color, forma, tamaño u otros factores visuales.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 18.
                  span Ley del contraste
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img51.png', alt='Composición visual con énfasis en un elemento mediante diferencias formales o cromáticas. ' style="max-width: 500px")
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ley de la proximidad
                p.mb-0 La cercanía espacial influye en la percepción visual, ya que los elementos ubicados próximos entre sí tienden a percibirse como una unidad.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 19.
                  span Ley de la proximidad
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img52.png', alt='Esquema perceptivo basado en la agrupación de elementos por cercanía espacial. ' style="max-width: 500px")

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ley de la semejanza
                p.mb-0 Cuando los elementos se parecen entre sí o son iguales, se perciben como un conjunto. Existe una tendencia natural a relacionar los elementos que comparten similitudes en forma, color, dimensión, ubicación u otras características visuales.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 20.
                  span Ley de la semejanza
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img53.png', alt='Esquema perceptivo de agrupación visual por similitud de forma, color o tamaño. ' style="max-width: 500px")

    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Elementos del diseño gráfico

    p.mb-5 Los #[b elementos del diseño gráfico] son herramientas visuales que se combinan para crear un diseño determinado y que, al igual que los fundamentos, buscan #[b comunicar una idea o un significado de la manera más eficaz posible].

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img54.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Wucius Wong, artista chino y autor del libro Fundamentos del diseño bi y tridimensional, reconoce cuatro grupos de elementos: conceptuales, visuales, de relación y prácticos. En este apartado se desarrollan únicamente los elementos visuales, ya que son los que permiten configurar las imágenes necesarias para la producción de contenidos gráficos.

    .style___box_1.fit___box_1.mb-5(data-aos="zoom-in")
      p.mb-0 Además de los definidos por Wong, se incluyen #[b cuatro elementos adicionales] (línea, objeto, tipografía y espacio), al considerarse necesarios para el diseño gráfico.
    
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Forma
                p.mb-0 Todo lo que se puede percibir tiene forma. La forma es un espacio delimitado y plano, de dos dimensiones (anchura y altura). Según el punto de vista del observador, se distinguen dos grupos: #[b geométricas], que pueden construirse con regla o compás (triángulos, cuadrados, círculos), y #[b orgánicas], que son menos esquemáticas, más libres y semejantes a las que se encuentran en la naturaleza.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img55.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Medida
                p.mb-0 Todas las formas tienen un tamaño. Al comparar diferentes elementos se perciben tamaño, forma, distancia, peso y ubicación en el espacio. El tamaño es relativo cuando se describe en términos de magnitud o pequeñez, pero también es físicamente medible.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img56.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Color
                p.mb-0 Generalmente la forma no puede separarse del color, ya que el color es la reacción de un objeto a los rayos de luz mediante los cuales se percibe.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img57.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Textura
                p.mb-0 Es la apariencia externa de la forma y se percibe mediante la vista, generando la ilusión del tacto según el tratamiento de su superficie. Puede ser natural o artificial y se crea mediante patrones o repeticiones que aportan realismo y tridimensionalidad a los objetos planos.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img58.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Línea
                p.mb-0 Según Jaime P. Llaseras (s.f.), la línea está formada por una sucesión de puntos y constituye el elemento visual básico de todo diseño gráfico. La línea conecta la trayectoria de un punto a otro y se caracteriza por su grosor, color, textura y estilo.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img59.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Objeto
                p.mb-0 Es una forma que adquiere propiedades tridimensionales, creando la ilusión de profundidad y realzando el volumen mediante el uso de la luz, la sombra y la perspectiva. Los objetos se miden por su anchura, altura y profundidad, y pueden ser geométricos u orgánicos.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img60.png', alt='' style="max-width: 500px").m-auto
                
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Espacio
                p.mb-0 Es la distancia o área alrededor o entre los elementos de un diseño y determina la esencia visual y el dinamismo de la composición. Puede ser #[b positivo], cuando corresponde a las formas donde recae la atención, o #[b negativo], cuando corresponde al espacio entre los elementos, el cual resulta igualmente fundamental para la composición.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img61.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Tipografía
                p.mb-0 El uso de letras o palabras es una de las formas más directas de comunicación visual y uno de los elementos más utilizados en el diseño gráfico. La tipografía no solo comunica palabras, sino que su estilo y disposición aportan significado a la composición. Cada carácter tipográfico resulta de la combinación de formas geométricas y orgánicas.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img62.png', alt='' style="max-width: 500px").m-auto


    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img15.svg" style="max-width: 60px").m-auto
      .col
        h3 Tipografía

    p.mb-5 Sobre la tipografía se pueden estudiar #[b tres aspectos principales], los cuales permiten comprender su estructura, su impacto perceptivo y su correcta aplicación dentro del diseño gráfico.

    .bg--img_03.mb-0
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img63.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Anatomía tipográfica").ajuste-cajaAcordion
              p.mb-3  Comprende todas las características de las tipografías que pueden descomponerse y sintetizarse. La anatomía de los caracteres es lo que otorga a la tipografía su propio estilo y aspecto. A partir de su anatomía, las tipografías pueden agruparse en #[b serif], #[i sans serif, script] y decorativas. La #[b serifa o remate] es un elemento identificador que refuerza la legibilidad del texto. 
            .row(titulo="Psicología de la tipografía").ajuste-cajaAcordion
              p.mb-3  Al igual que ocurre con el color, la selección de la tipografía se relaciona con la idea o mensaje que se quiere transmitir, puesto que cada tipo de letra produce sensaciones y valores perceptibles. “Está probado que la forma visual y el estilo de cada familia tipográfica provoca una emoción diferente que puede ser usada para transmitir diferentes conceptos” (Hemisferio Digital, 2017). 
            .row(titulo="Familia tipográfica y su clasificación").ajuste-cajaAcordion
              p.mb-3 Una familia tipográfica agrupa todas las variaciones posibles de un tipo de letra o fuente específica, como los diferentes grosores, anchos y cursivas. Entre las familias tipográficas se encuentran la Universe, Times Roman y la Garamond. Muchas familias reciben el nombre de su creador o de la publicación en la que se emplearon por primera vez (Ambrose y Harris, 2007, p. 82). En el siglo XX se realizaron tres clasificaciones tipográficas. La última fue desarrollada por la #[b ATypI] en 1962 (Association Typographique Internationale), integrando las clasificaciones de François Thibaudeau (1921), Maximilien Vox (1952) y Aldo Novarese (1957). Esta clasificación distingue once familias agrupadas en cuatro conjuntos: 
              ul.fa-ul.estilo___ul_1.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Tipografías Roman] (Romanas, Egipcias o Mecanas, Incisas).
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Tipografías Palo Seco] (Humanistas, Geométricas, Grotescas, Neogrotescas).
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Tipografías de Escritura] (#[i Script]) (Caligráficas, Manuales, Góticas).
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Tipografías de Fantasía o decorativas], que reinterpretan elementos formales fuera de toda norma, incorporando elementos variables de diversa naturaleza.
            .row(titulo="Tipografía digital").ajuste-cajaAcordion
              p.mb-5  Gracias a los avances tecnológicos se ha pasado de la fotocomposición a la tipografía digital, diseñada a partir de vectores para su visualización en cualquier tipo de pantalla o dispositivo móvil. Los formatos más tradicionales utilizados en los sistemas operativos son: #[i TrueType Font (.ttf), OpenType Font (.otf), Embedded OpenType (.eot) y Web Open Font Format (.woff y .woff2)]. Las tipografías web son una función del CSS (lenguaje para la composición y estructuración de páginas web HTML o XML) que permite especificar los archivos tipográficos que se descargan junto con un sitio web a medida que el usuario accede a él. Las tipografías web pueden crearse o seleccionarse a partir de catálogos existentes. Entre las herramientas para creación se encuentra #[i MyScriptFont], y también es posible diseñarlas en #[i Adobe Illustrator]. Para la selección de tipografías existentes se dispone de servicios como #[i Google Fonts, Typekit de Adobe, Typography y Creative Market], donde se ofrecen tipografías gratuitas y con licencias de pago.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
