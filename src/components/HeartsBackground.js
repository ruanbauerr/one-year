import { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';
import { colors } from '../constants/theme';

// Quantidade de corações caindo ao mesmo tempo na tela
const HEART_COUNT = 30;

/**
 * HeartsBackground
 * Fundo com corações caindo em loop (efeito de animação).
 * Reaproveitável em qualquer lugar que precise desse clima romântico —
 * hoje usado como fundo fixo da tela inteira da Home.
 *
 * Como funciona a animação:
 * - Criamos HEART_COUNT "corações", cada um com seu próprio Animated.Value
 *   (vai de 0 até 1 sem parar, em loop — Animated.loop).
 * - Esse valor de 0 a 1 é "traduzido" (interpolate) pra uma posição vertical:
 *   0 = coração começa lá em cima da área; 1 = coração termina lá embaixo.
 * - Cada coração tem uma posição horizontal (left) e um atraso (delay)
 *   e duração ligeiramente diferentes, sorteados uma única vez, pra não
 *   parecerem todos subindo "grudados" e sincronizados.
 *
 * Props:
 * - height: altura da área onde os corações sobem (normalmente a altura
 *   da tela, quando usado como fundo fixo)
 * - color: cor de fundo por trás dos corações (padrão: rosa vivo do tema)
 * - style: estilos extras/overrides pro container (ex: position absoluta
 *   pra cobrir a tela inteira)
 * - children: conteúdo opcional renderizado por CIMA do fundo animado
 */
export default function HeartsBackground({
  height = 400,
  color = colors.primary,
  style,
  children,
}) {
  // useRef garante que os valores sorteados (delay, left, duração) só
  // são calculados UMA VEZ, na primeira renderização — não a cada re-render.
  const hearts = useRef(
    Array.from({ length: HEART_COUNT }, () => ({
      progress: new Animated.Value(0),
      left: Math.random() * 90, // posição horizontal, em % (0 a 90 pra não cortar na borda)
      delay: Math.random() * 4000, // atraso inicial, até 4s
      duration: 5000 + Math.random() * 4000, // duração da subida, entre 5s e 9s
      size: 16 + Math.random() * 20, // tamanho do coração, entre 16 e 36
    }))
  ).current;

  useEffect(() => {
    // Inicia a animação de cada coração em loop infinito.
    //
    // IMPORTANTE: o "delay" (atraso inicial) só pode acontecer UMA VEZ,
    // antes da primeira queda — por isso usamos Animated.sequence pra
    // separar o delay (Animated.delay) do loop (Animated.loop) que vem
    // depois. Se colocássemos o delay dentro do Animated.timing que fica
    // dentro do loop, o atraso se repetiria a CADA volta, fazendo os
    // corações pararem por alguns segundos entre uma queda e outra.
    // IMPORTANTE: useNativeDriver está DESLIGADO de propósito.
    // No navegador (Expo Web), animações em loop com useNativeDriver: true
    // às vezes não fazem a transição suave — o valor "pula" direto pro
    // final, fazendo o coração sumir em vez de cair visivelmente.
    // Desligando, a animação roda via JavaScript a cada frame, o que é
    // mais lento em teoria, mas muito mais confiável no web.
    const animations = hearts.map((heart) =>
      Animated.sequence([
        Animated.delay(heart.delay),
        Animated.loop(
          Animated.timing(heart.progress, {
            toValue: 1,
            duration: heart.duration,
            easing: Easing.linear,
            useNativeDriver: false,
          })
        ),
      ])
    );

    animations.forEach((anim) => anim.start());

    // Ao desmontar o componente, para todas as animações (evita vazamento)
    return () => animations.forEach((anim) => anim.stop());
  }, [hearts]);

  return (
    <View style={[styles.container, { height, backgroundColor: color }, style]}>
      {hearts.map((heart, index) => {
        // Traduz o progresso (0 a 1) numa posição vertical:
        // começa em -40 (acima, fora da área) e termina em "height" (embaixo, some).
        const translateY = heart.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [-40, height],
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

      {/* Conteúdo opcional por cima do fundo animado */}
      {children && <View style={styles.content}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden', // corta os corações que passarem da área
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