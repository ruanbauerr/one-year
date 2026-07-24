import { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';
import { colors } from '../constants/theme';

// Quantidade de corações subindo ao mesmo tempo na tela
const HEART_COUNT = 12;

/**
 * HeartsBackground
 * Fundo rosa com corações subindo em loop (efeito de animação).
 * Usado atrás do vídeo surpresa, mas pode ser reaproveitado em qualquer
 * outra seção que precise desse mesmo clima.
 *
 * Como funciona a animação:
 * - Criamos HEART_COUNT "corações", cada um com seu próprio Animated.Value
 *   (vai de 0 até 1 sem parar, em loop — Animated.loop).
 * - Esse valor de 0 a 1 é "traduzido" (interpolate) pra uma posição vertical:
 *   0 = coração começa lá embaixo da área; 1 = coração termina lá em cima.
 * - Cada coração tem uma posição horizontal (left) e um atraso (delay)
 *   e duração ligeiramente diferentes, sorteados uma única vez, pra não
 *   parecerem todos subindo "grudados" e sincronizados.
 *
 * Props:
 * - height: altura da área onde os corações sobem (deve bater com o
 *   container pai, que é quem decide o tamanho da seção)
 * - children: conteúdo renderizado por CIMA do fundo (ex: o vídeo)
 */
export default function HeartsBackground({ height = 400, children }) {
  // useRef garante que os valores sorteados (delay, left, duração) só
  // são calculados UMA VEZ, na primeira renderização — não a cada re-render.
  const hearts = useRef(
    Array.from({ length: HEART_COUNT }, () => ({
      progress: new Animated.Value(0),
      left: Math.random() * 90, // posição horizontal, em % (0 a 90 pra não cortar na borda)
      delay: Math.random() * 3000, // atraso inicial, até 3s
      duration: 4000 + Math.random() * 3000, // duração da subida, entre 4s e 7s
      size: 18 + Math.random() * 18, // tamanho do coração, entre 18 e 36
    }))
  ).current;

  useEffect(() => {
    // Inicia a animação de cada coração em loop infinito
    const animations = hearts.map((heart) =>
      Animated.loop(
        Animated.timing(heart.progress, {
          toValue: 1,
          duration: heart.duration,
          delay: heart.delay,
          easing: Easing.linear,
          useNativeDriver: true, // melhora a performance da animação
        })
      )
    );

    animations.forEach((anim) => anim.start());

    // Ao desmontar o componente, para todas as animações (evita vazamento)
    return () => animations.forEach((anim) => anim.stop());
  }, [hearts]);

  return (
    <View style={[styles.container, { height }]}>
      {hearts.map((heart, index) => {
        // Traduz o progresso (0 a 1) numa posição vertical:
        // começa em "height" (embaixo, fora da área) e termina em -40 (acima, some).
        const translateY = heart.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [height, -40],
        });

        // Também faz o coração aparecer suavemente e sumir no final,
        // em vez de simplesmente "cortar" quando chega no topo.
        const opacity = heart.progress.interpolate({
          inputRange: [0, 0.1, 0.85, 1],
          outputRange: [0, 1, 1, 0],
        });

        return (
          <Animated.Text
            key={index}
            style={[
              styles.heart,
              {
                left: `${heart.left}%`,
                fontSize: heart.size,
                opacity,
                transform: [{ translateY }],
              },
            ]}
          >
            💗
          </Animated.Text>
        );
      })}

      {/* Conteúdo por cima do fundo animado (ex: o vídeo surpresa) */}
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.primary, // rosa mais vivo, pra destacar essa seção do resto do site
    overflow: 'hidden', // corta os corações que passarem da área
    borderRadius: 24,
  },
  heart: {
    position: 'absolute',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});