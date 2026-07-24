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
    title: '',
    description:
      'A gente se conhece há tanto tempo que nem lembro de um "antes de você". ' +
      'Foram alguns anos de conversa, de quase, até que, ' +
      'aos poucos, a gente foi se unindo.',
    image: null,
  },
  {
    id: 'eu-te-amo',
    date: '27 de junho',
    title: 'A primeira vez que eu disse que te amo 💖',
    description:
      '27 de junho.',
    image: require('../assets/photos/27-06-primeiro-eu-te-amo.jpeg'),
  },
  {
    id: 'nosso-dia',
    date: '25 de julho de 2025',
    title: 'O dia do nosso dia',
    description:
      '',
    image: require('../assets/photos/25-07-data-escolhida.jpeg'),
  },
  {
    id: 'casa-dela',
    date: '17 de agosto',
    title: 'A primeira vez na sua casa',
    description: '',
    image: require('../assets/photos/17-08-primeira-vez-casa-dela.jpeg'),
  },
];