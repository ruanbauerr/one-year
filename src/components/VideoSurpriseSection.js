import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import HeartsBackground from './HeartsBackground';
import { colors, typography, spacing } from '../constants/theme';

// Calculamos o tamanho do vídeo em PIXELS FIXOS (não em porcentagem).
// Isso evita um bug comum do React Native Web, onde "aspectRatio" combinado
// com "width: '90%'" às vezes não calcula certo e o vídeo fica pequeno
// demais, sobrando espaço vazio do lado.
const screenWidth = Dimensions.get('window').width;

// O vídeo fica com no máximo 320px de largura (bom pra celular e web),
// ou 80% da tela em telas bem estreitas — o que for menor.
const VIDEO_WIDTH = Math.min(320, screenWidth * 0.8);
const VIDEO_HEIGHT = VIDEO_WIDTH * (16 / 9); // mantém a proporção vertical (9:16)

// Altura da área do vídeo surpresa (o fundo de corações). Precisa ser
// MAIOR que o vídeo (senão o vídeo fica cortado, já que o fundo tem
// overflow: 'hidden'), então usamos a altura do vídeo + uma margem.
const SURPRISE_HEIGHT = VIDEO_HEIGHT + 80;

/**
 * VideoSurpriseSection
 * A "surpresa final" da Home: fundo rosa com corações subindo, e os
 * vídeos tocando por cima.
 *
 * IMPORTANTE pra rodar localmente: os vídeos precisam estar salvos em
 * src/assets/videos/video-1.mov e src/assets/videos/video-2.mov —
 * o código já espera esses dois arquivos nesses caminhos exatos.
 */
export default function VideoSurpriseSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>E o melhor ainda está por vir 💕</Text>

      <HeartsBackground height={SURPRISE_HEIGHT}>
        <Video
          // eslint-disable-next-line
          source={require('../assets/videos/video-1.mov')}
          style={styles.video}
          useNativeControls
          resizeMode={ResizeMode.COVER}
          isLooping
        />
      </HeartsBackground>

      <HeartsBackground height={SURPRISE_HEIGHT}>
        <Video
          // eslint-disable-next-line
          source={require('../assets/videos/video-2.mov')}
          style={styles.video}
          useNativeControls
          resizeMode={ResizeMode.COVER}
          isLooping
        />
      </HeartsBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.lg,
    paddingVertical: spacing.lg,
  },
  title: {
    ...typography.title,
    fontSize: 22,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  video: {
    width: VIDEO_WIDTH,
    height: VIDEO_HEIGHT,
    borderRadius: 20,
  },
});