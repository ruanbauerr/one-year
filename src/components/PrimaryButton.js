import { Pressable, Text, StyleSheet } from 'react-native';
import { colors, typography } from '../constants/theme';

/**
 * PrimaryButton
 * Botão reutilizável usado em várias telas do app (Sim, "ver galeria", etc).
 * Recebe o texto (label), a função de clique (onPress) e um estilo opcional extra.
 */
export default function PrimaryButton({ label, onPress, style }) {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 24,
    // sombra leve pra dar profundidade (funciona em iOS)
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3, // sombra equivalente no Android
  },
  text: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
});