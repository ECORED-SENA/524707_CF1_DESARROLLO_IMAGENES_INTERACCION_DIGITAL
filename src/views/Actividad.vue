<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos del diseño gráfico y digital en contenidos multimedia',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave sobre diseño gráfico, teoría del color, principios de composición, diseño digital, tipografía y lenguaje audiovisual. ',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal del diseño gráfico como disciplina?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Transmitir ideas con tipografías decorativas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Representar objetos tridimensionales con precisión técnica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comunicar un mensaje mediante elementos visuales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Usar solo colores primarios en composiciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué caracteriza a la teoría de la síntesis aditiva del color?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Produce blanco al mezclar los primarios.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Produce negro al mezclar los primarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Emplea colores CMY para impresiones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se aplica solo en papelería publicitaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué principio de composición se refiere a la armonía entre los elementos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contraste.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Jerarquía.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Variedad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Equilibrio.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es el color primario según la síntesis sustractiva?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Magenta.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verde.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Rojo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Negro.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué función tiene el diseño digital según el contenido del programa?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear documentos impresos para empresas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ofrecer soluciones visuales para medios digitales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseñar estructuras arquitectónicas en 3D.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Enseñar dibujo técnico en aulas virtuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la propiedad del color que indica su cercanía al blanco o al negro?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Saturación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tono.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Brillo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Fondo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué caracteriza a las tipografías sans serif?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Son de estilo gótico decorativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Carecen de remates o serifas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Simulan caligrafía manual antigua.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo se usan en documentos legales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué es un mockup en diseño web?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un dibujo sin interactividad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una plantilla con etiquetas HTML.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una maqueta visual del diseño final.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una lista de colores complementarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué elemento del diseño permite crear profundidad y volumen?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Color.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Línea.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Objeto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Escala.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué representa el círculo cromático en diseño?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La combinación aleatoria de colores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La organización de colores primarios y secundarios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una paleta limitada para impresión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El orden de los colores cálidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el principio de diseño web que facilita el acceso a personas con discapacidades?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Navegabilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Accesibilidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Estética visual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Contenido gráfico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué tipo de armonía de color usa tres tonos formando un triángulo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tríada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Monocromática.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Análoga.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Complementarios divididos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué define la ley de figura-fondo en la Gestalt?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organización por tamaño.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Separación entre objeto central y fondo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Asociación de elementos similares.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Contraste de colores primarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué caracteriza a los géneros de entretenimiento en el lenguaje audiovisual?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se relacionan con el humor, la competencia y la exhibición.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Representan únicamente documentales científicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Usan elementos solamente sonoros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Persiguen siempre un fin educativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué significa usabilidad en diseño web?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Velocidad de carga de la página.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Facilidad de uso para el usuario.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cantidad de imágenes animadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estética de los colores aplicados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es una herramienta utilizada para planear la arquitectura web?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<i>Wireframe</i>.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Filtro cromático.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Balanceador visual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Maqueta física.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué tipo de forma se construye con compás o regla?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Orgánica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Geométrica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Artificial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Simbólica',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué permite la ley del cierre en percepción visual?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diferenciar colores fríos y cálidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Completar formas incompletas mentalmente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Relacionar contenido multimedia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambiar los colores dominantes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué colores forman la síntesis aditiva?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rojo, verde y azul.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cian, magenta y amarillo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Azul, blanco y negro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Rojo, amarillo y negro.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Qué define mejor el lenguaje audiovisual?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una secuencia de imágenes estáticas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un sistema que combina elementos visuales y sonoros.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un método solo para crear animaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una técnica limitada al cine tradicional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
