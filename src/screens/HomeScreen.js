import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../constants/theme';

/**
 * HomeScreen
 * Essa é a ÚNICA tela principal do app (depois da pergunta inicial).
 * Ela vai conter tudo: abertura em texto, linha do tempo, galeria e frases.
 * Por enquanto só tem a seção de abertura — as próximas seções (timeline,
 * galeria, frases) entram aqui embaixo nos próximos commits, cada uma
 * como um bloco/seção dentro do mesmo ScrollView.
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

      {/* ---------- Próximas seções entram aqui ----------
          - Linha do tempo (fotos + marcos + frases)
          - Galeria de fotos
          - Vídeo surpresa com fundo rosa e corações
      */}
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