import { View, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../constants/theme';
import PrimaryButton from '../components/PrimaryButton';
import DodgeButton from '../components/DodgeButton';

/**
 * QuestionScreen
 * Primeira tela que ela vê ao abrir o app.
 * Pergunta "você sabe que dia é hoje?" com dois botões:
 * - "Sim": normal, leva pra tela principal (Home)
 * - "Não": foge do toque/mouse, então na prática só dá pra apertar "Sim"
 */
export default function QuestionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>Você sabe que dia é hoje? 🤔</Text>

      {/* Botão "Sim" — leva direto pra tela principal do app */}
      <PrimaryButton label="Sim" onPress={() => navigation.replace('Home')} />

      {/* Botão "Não" — sempre foge, pra ela nunca conseguir apertar */}
      <DodgeButton label="Não" />
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
});