<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 El programa de formación tecnológica en Integración de Contenidos Digitales pretende otorgar al aprendiz SENA los conocimientos necesarios para desarrollar estrategias de planeación y producción de contenidos digitales y multimedia que las #[i mipymes] del país requieren en el contexto de la cuarta revolución industrial, tal como se puede apreciar en el siguiente video.

    figure(data-aos="zoom-in").mb-5
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/5HV7iGgE5QQ" title="Contenido digital" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") #[b Video]: contenido digital.
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este componente iniciará con la conceptualización del diseño, desde la perspectiva de las composiciones gráficas y digitales, con la que conseguirá crear imágenes. Posteriormente, se le entregará información que le posibilite la elaboración de piezas audiovisuales, para que finalmente pueda integrar ambos productos en estrategias digitales que consigan la operatividad, funcionalidad, visibilidad o cualquier otro proceso necesario que contribuya a la conversión digital de las empresas del país.

</template>

<script>
export default {
  name: 'Introduccion',
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
