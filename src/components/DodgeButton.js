import { useRef, useState } from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { colors } from '../constants/theme';

// Tamanho fixo do botão (facilita calcular os limites de onde ele pode fugir)
const BUTTON_WIDTH = 90;
const BUTTON_HEIGHT = 48;

/**
 * DodgeButton
 * Botão que "foge" quando o mouse chega perto (web) ou quando é tocado (mobile).
 *
 * Como funciona:
 * - Fica dentro de um container "playArea" que a gente mede com onLayout.
 * - Assim que medimos o container, colocamos o botão bem no CENTRO dele
 *   (fica visualmente ao lado do botão "Sim", como um botão normal).
 * - A partir daí, todo hover (web) ou toque (mobile) sorteia uma nova
 *   posição dentro dos limites do container.
 * - No celular não existe "hover" de verdade, então usamos onPressIn:
 *   assim que o dedo encosta, o botão já pulou pra outro lugar antes do
 *   toque "soltar" em cima dele, então o clique nunca completa.
 *
 * Props:
 * - label: texto do botão (ex: "Não")
 * - style: estilos extras/overrides pro container "playArea" (ex: usar
 *   flex: 1 pra encaixar numa linha ao lado do botão "Sim")
 */
export default function DodgeButton({ label = 'Não', style }) {
  // Guarda o tamanho do container onde o botão pode se mover
  const containerSize = useRef({ width: 0, height: 0 });

  // null até medirmos o container pela primeira vez (evita flash no canto)
  const [position, setPosition] = useState(null);

  // Sorteia uma posição nova dentro dos limites do container
  const dodge = () => {
    const { width, height } = containerSize.current;
    if (!width || !height) return;

    const maxLeft = Math.max(width - BUTTON_WIDTH, 0);
    const maxTop = Math.max(height - BUTTON_HEIGHT, 0);

    setPosition({
      top: Math.random() * maxTop,
      left: Math.random() * maxLeft,
    });
  };

  return (
    // playArea é a "arena" onde o botão pode se mover livremente.
    <View
      style={[styles.playArea, style]}
      onLayout={(event) => {
        const { width, height } = event.nativeEvent.layout;
        containerSize.current = { width, height };

        // Primeira medição: posiciona o botão bem no centro da área,
        // do lado do "Sim", em vez de nascer no canto (0,0).
        if (position === null) {
          setPosition({
            top: (height - BUTTON_HEIGHT) / 2,
            left: (width - BUTTON_WIDTH) / 2,
          });
        }
      }}
    >
      {/* Só renderiza o botão depois que já sabemos o centro certo */}
      {position !== null && (
        <Pressable
          style={[styles.button, { top: position.top, left: position.left }]}
          onHoverIn={dodge} // web: mouse chegou perto
          onPressIn={dodge} // mobile: dedo tocou
        >
          <Text style={styles.text}>{label}</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  playArea: {
    width: '100%',
    maxWidth: 320, // mantém a área de fuga num tamanho razoável, mesmo na web
    height: 180, // área onde o botão "Não" pode fugir
    alignSelf: 'center',
  },
  button: {
    position: 'absolute',
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    backgroundColor: colors.secondary,
    borderRadius: 24, // mesmo estilo "pílula" do botão Sim
    alignItems: 'center',
    justifyContent: 'center',
    transitionDuration: '150ms', // transição suave (funciona bem no web)
  },
  text: {
    color: colors.white,
    fontWeight: '700',
  },
});