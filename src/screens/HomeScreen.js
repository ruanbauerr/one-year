import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../constants/theme';
import TimelineSection from '../components/TimelineSection';
import GallerySection from '../components/GallerySection';
import QuotesSection from '../components/QuotesSection';

/**
 * HomeScreen
 * Essa é a ÚNICA tela principal do app (depois da pergunta inicial).
 * Ela vai conter tudo: abertura em texto, linha do tempo, galeria e frases.
 * Já tem: abertura + linha do tempo (TimelineSection) + galeria (GallerySection)
 * + frases fofas (QuotesSection).
 * Sem vídeo por enquanto (decisão consciente — não usar vídeos no site).
 */
export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {/* ---------- Seção de abertura ---------- */}
      <View style={styles.openingSection}>
        <Text style={styles.openingTitle}>
          Então meu amor, hoje é o dia que escolhemos pra ser o nosso dia.
        </Text>

        <Text style={styles.openingBody}>
          Não foi um começo do nada — a gente já vinha se conhecendo e se
          escolhendo há muito mais tempo do que esse ano conta. Mas foi
          nesse último ano que tudo ficou real, definitivo, nosso.
        </Text>

        <Text style={styles.openingBody}>
          Cada dia, cada bobeira, cada momento bom — tá tudo guardado aqui
          embaixo. Vem ver.
        </Text>
      </View>

      {/* ---------- Linha do tempo ---------- */}
      <TimelineSection />

      {/* ---------- Galeria de fotos ---------- */}
      <GallerySection />

      {/* ---------- Frases fofas (agradecimento + sobre o ano) ---------- */}
      <QuotesSection />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
    gap: spacing.lg,
  },
  openingSection: {
    paddingVertical: spacing.xl,
    gap: spacing.md,
  },
  openingTitle: {
    ...typography.title,
    textAlign: 'center',
  },
  openingBody: {
    ...typography.body,
    textAlign: 'center',
  },
});