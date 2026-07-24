import { View, Text, Image, StyleSheet } from 'react-native';
import { galleryData } from '../data/galleryData';
import { colors, typography, spacing } from '../constants/theme';

/**
 * GallerySection
 * Mostra as fotos que não têm data/marco específico, numa grade de 2 colunas.
 *
 * Como funciona a grade (versão corrigida):
 * - Em vez de usar flexWrap + width em porcentagem (que quebra no React
 *   Native Web — as fotos ficam gigantes e empilhadas em 1 coluna só),
 *   dividimos as fotos manualmente em DUAS colunas de verdade:
 *   uma só com as fotos de índice par (0, 2, 4...) e outra com as ímpares
 *   (1, 3, 5...). Cada coluna é uma View com flex: 1, lado a lado.
 * - Isso funciona igual em web, iOS e Android, sem depender de wrap.
 */
export default function GallerySection() {
  // Separa as fotos em duas listas, alternando entre as colunas
  const leftColumn = galleryData.filter((_, index) => index % 2 === 0);
  const rightColumn = galleryData.filter((_, index) => index % 2 === 1);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Nossa galeria</Text>

      <View style={styles.grid}>
        <View style={styles.column}>
          {leftColumn.map((item) => (
            <Image key={item.id} source={item.image} style={styles.photo} />
          ))}
        </View>

        <View style={styles.column}>
          {rightColumn.map((item) => (
            <Image key={item.id} source={item.image} style={styles.photo} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
  },
  sectionTitle: {
    ...typography.title,
    fontSize: 22,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  grid: {
    flexDirection: 'row',
    gap: spacing.sm, // espaço entre as duas colunas
  },
  column: {
    flex: 1, // cada coluna ocupa metade do espaço disponível
    gap: spacing.sm, // espaço entre as fotos dentro da mesma coluna
  },
  photo: {
    width: '100%', // 100% da coluna (que já é metade da tela) — não da tela inteira
    aspectRatio: 3 / 4, // mantém uma proporção vertical parecida com selfie
    borderRadius: 16,
    backgroundColor: colors.background, // preenche enquanto a foto carrega
  },
});