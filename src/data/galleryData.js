/**
 * galleryData.js
 * Fotos que não têm uma data/marco específico na linha do tempo,
 * mas ainda assim merecem aparecer no site — ficam juntas numa galeria.
 *
 * Pra adicionar uma foto nova na galeria, só adicionar mais uma linha
 * no array abaixo com um id único e o require() da imagem.
 */

export const galleryData = [
  { id: 'foto-1', image: require('../assets/photos/foto-evento-sem-data.jpeg') },
  { id: 'foto-2', image: require('../assets/photos/foto-carro.jpeg') },
  { id: 'foto-3', image: require('../assets/photos/foto-evento-2.jpeg') },
  { id: 'foto-4', image: require('../assets/photos/foto-flores.jpeg') },
  { id: 'foto-5', image: require('../assets/photos/foto-praia.jpeg') },
  { id: 'foto-6', image: require('../assets/photos/foto-praia-2.jpeg') },
  { id: 'foto-7', image: require('../assets/photos/foto-casa.jpeg') },
  { id: 'foto-8', image: require('../assets/photos/foto-sofa.jpeg') },
  { id: 'foto-9', image: require('../assets/photos/foto-close.jpeg') },
  { id: 'foto-10', image: require('../assets/photos/foto-evento-3.jpeg') },
  { id: 'foto-11', image: require('../assets/photos/foto-natal.jpeg') },
  { id: 'foto-12', image: require('../assets/photos/foto-evento-4.jpeg') },
];