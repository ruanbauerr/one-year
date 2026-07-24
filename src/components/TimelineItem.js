import { View, Text, Image, StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../constants/theme';

/**
 * TimelineItem
 * Renderiza UM marco da linha do tempo: data, título, descrição e foto (se tiver).
 * Componente separado do TimelineSection pra ficar fácil de reaproveitar/testar.
 */
export default function TimelineItem({ item }) {
  return (
    // overflow: 'hidden' é o que garante que a foto (que "estoura" as bordas
    // do card de propósito, ver estilo .imageWrapper) fique cortada certinho
    // nos cantos arredondados do card, em vez de vazar quadrada por cima deles.
    <View style={styles.card}>
      {/* Data só aparece se o marco tiver uma (o marco "Desde sempre" não tem) */}
      {item.date && <Text style={styles.date}>{item.date}</Text>}

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>

      {/* Foto só aparece se o marco tiver uma associada.
          Fica dentro de um wrapper com "contain" pra mostrar a foto
          inteira (sem cortar rosto/corpo), preenchendo os espaços
          vazios com o rosa clarinho do fundo. */}
      {item.image && (
        <View style={styles.imageWrapper}>
          <Image source={item.image} style={styles.image} resizeMode="contain" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: spacing.md,
    gap: spacing.sm,
    overflow: 'hidden', // corta qualquer filho (como a foto) nos cantos arredondados
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
  imageWrapper: {
    // "estoura" o padding do card de propósito, pra foto ocupar a largura
    // toda (de ponta a ponta), em vez de ficar com uma margem estranha
    marginHorizontal: -spacing.md,
    marginTop: spacing.xs,
    height: 340, // altura generosa pra caber fotos na vertical sem cortar demais
    backgroundColor: colors.background, // preenche os "vazios" do contain
  },
  image: {
    width: '100%',
    height: '100%',
  },
});