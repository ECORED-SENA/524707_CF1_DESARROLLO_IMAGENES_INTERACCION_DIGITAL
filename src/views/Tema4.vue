<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Guion audiovisual
    
    p.mb-5 El guion es la base escrita que estructura y organiza una producción audiovisual. El guion es el texto que define la estructura de una producción audiovisual. Es un discurso escrito que se transforma en imágenes y sonido, y especifica por escrito lo que sucederá el día de la grabación y lo que el espectador verá y escuchará. Registra el orden y los tiempos en los que aparecen en pantalla las narraciones, las imágenes y los recursos gráficos que conforman el contenido.

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img100.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El guion se convierte en la guía escrita del producto audiovisual dentro de los procesos de pregrabado, producción y realización que permiten construir la narrativa audiovisual en su totalidad. Los guiones se editan y reescriben constantemente, lo que hace necesario un ejercicio riguroso de lectura y escritura previa para definir y organizar el contenido.
    
    p.mb-5 Este debe estar acompañado de un #[b guion gráfico o #[i storyboard]], en el cual se presenta la secuencia del producto mediante grupos de ilustraciones que funcionan como una previsualización de los contenidos a realizar. Aunque existen muchos tipos de guion, cualquier producción audiovisual debería contar al menos con dos tipos previos al día de grabación, ya que esto permite minimizar el desperdicio de tiempo y presupuesto.

    .bg--img_03.mb-0
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img101.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Guion cinematográfico").ajuste-cajaAcordion
              p.mb-3 Dependiendo del ámbito de trabajo, también se denomina #[i screenplay, script] o #[i teleplay]. Expresa en palabras cómo será el producto audiovisual resultante y, debido a su importancia, debe ser muy detallado. Una vez finalizado, sirve para negociar las decisiones cuando existen diferencias entre las partes involucradas en la producción.
            .row(titulo="Guion literario").ajuste-cajaAcordion
              p.mb-3 Describe con palabras todo lo esencial para comprender cómo será el contenido audiovisual. No está redactado de forma literaria, sino de manera clara y precisa. Está pensado en términos visuales desde el punto de vista de las escenas, la acción, los diálogos y los espacios donde se desarrollan. Se elabora de forma cronológica y es uno de los tipos de guion más relevantes.
            .row(titulo="Guion técnico").ajuste-cajaAcordion
              p.mb-3 También llamado #[i shooting script]. Se desarrolla específicamente para el formato de video y define lo audiovisual desde el punto de vista de las secuencias. Se basa generalmente en el guion literario y traduce la historia en imágenes concretas. Describe lo audiovisual utilizando el lenguaje propio de la imagen, lo cual resulta útil tanto en la grabación como en la edición.
            .row(titulo="Guion ilustrado").ajuste-cajaAcordion
              p.mb-3 Conocido como storyboard. Es un conjunto de imágenes realizadas mediante dibujo, ilustración, collage u otras técnicas visuales, que permiten anticipar el contenido audiovisual. Es una herramienta clave para la animación, la coordinación del rodaje, el desarrollo del concepto de arte y la planificación de efectos especiales. Facilita la comunicación entre director, cámara y especialistas. Los #[i storyboards] más comunes siguen el american #[i style], similar a un cómic sencillo con viñetas regulares.
            .row(titulo="Escaleta").ajuste-cajaAcordion
              p.mb-3 Forma de guion más simple que presenta una lista de escenas o situaciones con una breve descripción. Es útil como borrador del guion literario y ayuda a establecer la estructura inicial del video. Es el guion mínimo recomendado para cualquier producción audiovisual y debe mantener coherencia de principio a fin.
    
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 #[i Storyboard] o guion gráfico
    
    p.mb-5 Es una herramienta de planificación que organiza visualmente la narrativa audiovisual. El #[i storyboard] o guion gráfico es un documento en el que se organiza de manera secuencial una serie de ilustraciones o imágenes con el fin de explicar una narrativa audiovisual. Se utiliza como parte de la planificación, ya que en él se establecen previamente las escenas y los planos, lo que facilita el proceso de producción. Cada imagen o cuadro va acompañado de un texto descriptivo que explica lo que sucede en esa imagen. El #[i storyboard] cuenta con diversos formatos que facilitan la comprensión visual de los planos y de los movimientos de cámara en las escenas, dependiendo del proyecto.

    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 #[i Storyboard] animado
                p.mb-0 Puede estar compuesto por bocetos individuales con el fin de crear sensación de tiempo y movimiento. Al añadir música y diálogo, las animaciones permiten generar un mayor sentido de flujo visual y temporal.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img102.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 #[i Storyboard digimatics]
                p.mb-0 Sustituye los bocetos por imágenes digitales unidas entre sí para crear sensación de tiempo y movimiento. Es similar al #[i storyboard] animado y se utiliza especialmente en publicidad para visualizar anuncios y realizar películas de prueba.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img103.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 #[i Storyboard] de miniaturas
                p.mb-0 Se caracteriza por su tamaño reducido y por reunirse en una sola hoja. Se dibuja con rapidez y emplea garabatos en los paneles de acción, así como bocetos previos antes de desarrollar los detalles.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img104.png', alt='' style="max-width: 500px").m-auto
              
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 #[i Storyboard] tradicional
                p.mb-0 Consiste en dibujos realizados a lápiz o bolígrafo por un artista bajo la supervisión del productor o director. Sigue las pautas del cineasta, del cliente o del productor, aunque en muchos casos es el propio director quien elabora su #[i storyboard].
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img105.png', alt='' style="max-width: 500px").m-auto

</template>

<script>
export default {
  name: 'Tema4',
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
