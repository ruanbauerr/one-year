/**
 * timelineData.js
 * Aqui ficam os marcos da história do casal, em ordem cronológica.
 * Cada marco tem: data (texto), título, descrição e (quando existe) uma foto.
 *
 * Pra adicionar um novo marco no futuro, basta copiar um objeto desses
 * e ajustar os campos — o componente TimelineSection já sabe renderizar
 * automaticamente qualquer item dessa lista.
 */

export const timelineData = [
  {
    id: 'sempre',
    date: null, // sem data exata — é sobre "desde sempre"
    title: 'Desde sempre',
    description:
      'A gente se conhece há tanto tempo que nem lembro de um "antes de você". ' +
      'Foram uns 4 anos de conversa, de quase, de "ainda não é a hora" — até que, ' +
      'aos poucos, sem data marcada, a gente foi se permitindo.',
    image: null,
  },
  {
    id: 'eu-te-amo',
    date: '27 de junho',
    title: 'A primeira vez que eu disse',
    description:
      '27 de junho. O dia que eu finalmente disse em voz alta o que já sentia.',
    image: require('../assets/photos/27-06-primeiro-eu-te-amo.jpeg'),
  },
  {
    id: 'nosso-dia',
    date: '25 de julho de 2025',
    title: 'O dia que escolhemos',
    description:
      'Não teve um começo exato — foi acontecendo aos poucos, até virar óbvio. ' +
      'Então escolhemos o dia 25 de julho pra ser o nosso dia.',
    image: require('../assets/photos/25-07-data-escolhida.jpeg'),
  },
  {
    id: 'casa-dela',
    date: '17 de agosto',
    title: 'A primeira vez na sua casa',
    description: 'A primeira vez que fui até a sua casa.',
    image: require('../assets/photos/17-08-primeira-vez-casa-dela.jpeg'),
  },
];