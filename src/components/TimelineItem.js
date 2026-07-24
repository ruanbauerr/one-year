import { View, Text, Image, StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../constants/theme';

/**
 * TimelineItem
 * Renderiza UM marco da linha do tempo: data, título, descrição e foto (se tiver).
 * Componente separado do TimelineSection pra ficar fácil de reaproveitar/testar.
 */
export default function TimelineItem({ item }) {
  return (
    <View style={styles.card}>
      {/* Data só aparece se o marco tiver uma (o marco "Desde sempre" não tem) */}
      {item.date && <Text style={styles.date}>{item.date}</Text>}

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>

      {/* Foto só aparece se o marco tiver uma associada */}
      {item.image && <Image source={item.image} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: spacing.md,
    gap: spacing.sm,
    // sombra leve pra destacar o card do fundo
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 3,
  },
  date: {
    color: colors.accent,
    fontWeight: '700',
    fontSize: 13,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  title: {
    ...typography.title,
    fontSize: 20,
  },
  description: {
    ...typography.body,
  },
  image: {
    width: '100%',
    height: 260,
    borderRadius: 16,
    marginTop: spacing.xs,
    resizeMode: 'cover',
  },
});