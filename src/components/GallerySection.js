import { useState } from 'react';
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
 *   dividimos as fotos manualmente em DUAS colunas de verdade.
 * - E em vez de usar "width: '100%' + aspectRatio" nas fotos (que também
 *   dá problema — no celular as fotos ficam enormes, quase do tamanho da
 *   tela toda, porque o navegador/motor nativo não calcula certo essa
 *   combinação), a gente MEDE a largura real da grade com onLayout e
 *   calcula a altura de cada foto em PIXELS FIXOS. Isso é o mesmo tipo de
 *   correção que já fizemos antes pro tamanho do vídeo.
 */
export default function GallerySection() {
  // Largura da grade inteira (as duas colunas juntas), medida em tempo real
  const [gridWidth, setGridWidth] = useState(0);

  // Separa as fotos em duas listas, alternando entre as colunas
  const leftColumn = galleryData.filter((_, index) => index % 2 === 0);
  const rightColumn = galleryData.filter((_, index) => index % 2 === 1);

  // Calcula o tamanho de cada foto a partir da largura medida.
  // Só calculamos depois que já medimos (gridWidth > 0), pra evitar
  // fotos com tamanho errado no primeiro instante antes da medição.
  const columnGap = spacing.sm;
  const columnWidth = gridWidth > 0 ? (gridWidth - columnGap) / 2 : 0;
  const photoHeight = columnWidth * (4 / 3); // mantém a proporção vertical (3:4)

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Enfim, foram varios momentos incriveis com você, e aqui mais alguns deles</Text>

      <View
        style={styles.grid}
        onLayout={(event) => setGridWidth(event.nativeEvent.layout.width)}
      >
        {/* Só renderiza as fotos depois que já medimos a largura da grade */}
        {columnWidth > 0 && (
          <>
            <View style={[styles.column, { width: columnWidth }]}>
              {leftColumn.map((item) => (
                <Image
                  key={item.id}
                  source={item.image}
                  style={{ width: columnWidth, height: photoHeight, borderRadius: 16 }}
                />
              ))}
            </View>

            <View style={[styles.column, { width: columnWidth }]}>
              {rightColumn.map((item) => (
                <Image
                  key={item.id}
                  source={item.image}
                  style={{ width: columnWidth, height: photoHeight, borderRadius: 16 }}
                />
              ))}
            </View>
          </>
        )}
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
    color: colors.white,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    gap: spacing.sm, // espaço entre as fotos dentro da mesma coluna
  },
});