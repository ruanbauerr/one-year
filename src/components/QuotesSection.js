import { View, Text, StyleSheet } from 'react-native';
import { quotesData } from '../data/quotesData';
import { colors, typography, spacing } from '../constants/theme';

/**
 * QuotesSection
 * Mostra as frases fofas soltas, uma embaixo da outra, sem card ao redor —
 * diferente da linha do tempo e da galeria, aqui é só texto mesmo,
 * pra parecer mais um "desabafo" solto do que uma lista organizada.
 */
export default function QuotesSection() {
  return (
    <View style={styles.container}>
      {quotesData.map((quote, index) => (
        <Text key={index} style={styles.quote}>
          {quote}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.lg, // espaço generoso entre as frases, pra cada uma "respirar"
    paddingVertical: spacing.xl,
  },
  quote: {
    ...typography.body,
    fontSize: 17,
    fontStyle: 'italic',
    color: colors.white,
    textAlign: 'center',
  },
});