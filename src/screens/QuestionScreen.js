import { View, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../constants/theme';
import PrimaryButton from '../components/PrimaryButton';
import DodgeButton from '../components/DodgeButton';

/**
 * QuestionScreen
 * Primeira tela que ela vê ao abrir o app.
 * Pergunta "você sabe que dia é hoje?" com dois botões LADO A LADO:
 * - "Sim": normal, fixo, leva pra tela principal (Home)
 * - "Não": foge do toque/mouse dentro da área ao lado do Sim, então na
 *   prática só dá pra apertar "Sim"
 */
export default function QuestionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>Você sabe que dia é hoje? 🤔</Text>

      {/* Linha com os dois botões: Sim fixo à esquerda, Não fugindo à direita */}
      <View style={styles.buttonsRow}>
        <PrimaryButton label="Sim" onPress={() => navigation.replace('Home')} />

        {/* flex: 1 faz a área de fuga do "Não" ocupar o espaço restante da linha */}
        <DodgeButton label="Não" style={styles.dodgeArea} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
    gap: spacing.lg,
  },
  question: {
    ...typography.title,
    textAlign: 'center',
  },
  buttonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    maxWidth: 320,
  },
  dodgeArea: {
    flex: 1, // ocupa o espaço restante da linha, ao lado do Sim
    width: undefined, // remove o width fixo padrão do DodgeButton (usamos flex aqui)
    maxWidth: undefined,
    alignSelf: 'stretch',
  },
});