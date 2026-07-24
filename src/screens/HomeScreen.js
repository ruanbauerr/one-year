import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import { colors, typography, spacing } from '../constants/theme';
import TimelineSection from '../components/TimelineSection';
import GallerySection from '../components/GallerySection';
import QuotesSection from '../components/QuotesSection';
import HeartsBackground from '../components/HeartsBackground';

// Altura da tela do aparelho — usamos como altura do fundo de corações,
// já que ele fica "fixo" atrás de todo o conteúdo (não rola junto com o scroll).
const screenHeight = Dimensions.get('window').height;

/**
 * HomeScreen
 * Essa é a ÚNICA tela principal do app (depois da pergunta inicial).
 * Ela vai conter tudo: abertura em texto, linha do tempo, galeria e frases.
 * Já tem: abertura + linha do tempo (TimelineSection) + galeria (GallerySection)
 * + frases fofas (QuotesSection).
 * O fundo é rosa vivo e romântico, com corações subindo em loop
 * (HeartsBackground), fixo atrás de todo o conteúdo que rola por cima.
 * Sem vídeo (decisão consciente — não usar vídeos no site).
 */
export default function HomeScreen() {
  return (
    // wrapper com position: 'relative' — é o que permite o HeartsBackground
    // (com position: 'absolute') se posicionar "atrás" do ScrollView
    <View style={styles.wrapper}>
      {/* Fundo fixo: rosa vivo + corações subindo, atrás de tudo */}
      <HeartsBackground
        height={screenHeight}
        color={colors.romantic}
        style={styles.heartsBackground}
      />

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
            Não foi um começo do nada, a gente já vinha se
            escolhendo há muito mais tempo do que esse ano conta. Mas foi
            nesse último ano que tudo ficou real, definitivo, nosso.
          </Text>

          <Text style={styles.openingBody}>
            Cada dia que passamos juntos, cada conversa, cada risada, cada abraço, cada beijo 
          tudo isso foi melhorando a minha vida, me fazendo mais feliz, me fazendo mais eu. E eu espero que tenha sido assim pra você também.
        é impresssionante como você consegue transformar momentos simples em memórias inesqueciveis,
        Você é minha melhor escolha todos os dias, obrigado por estar comigo, por me amar e por fazer meu mundo mais bonito.
          Cada dia que passa, meu coração se enche mais de carinho e admiração por você. 
          Cada sorriso seu ilumina o meu mundo, e cada momento juntos faz eu sentir que estour onde deveria estar.
          Você é a razão dos meus melhores pensamentos, e tudo ao seu lado se torna mais lindo.
          Eu te amo pra sempre meu amor.
          </Text>
        </View>

        {/* ---------- Linha do tempo ---------- */}
        <TimelineSection />

        {/* ---------- Galeria de fotos ---------- */}
        <GallerySection />

        {/* ---------- Frases fofas (agradecimento + sobre o ano) ---------- */}
        <QuotesSection />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
  },
  heartsBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent', // deixa o rosa do HeartsBackground aparecer atrás
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
    color: colors.white, // texto branco pra contrastar com o fundo rosa vivo
  },
  openingBody: {
    ...typography.body,
    textAlign: 'center',
    color: colors.white,
  },
});