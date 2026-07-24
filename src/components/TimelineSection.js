import { View, Text, StyleSheet } from 'react-native';
import { timelineData } from '../data/timelineData';
import TimelineItem from './TimelineItem';
import { typography, spacing } from '../constants/theme';

/**
 * TimelineSection
 * Renderiza a lista inteira de marcos (timelineData), um TimelineItem
 * embaixo do outro. Fica dentro da Home, junto com as outras seções.
 */
export default function TimelineSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Nossa história</Text>

      {timelineData.map((item) => (
        <TimelineItem key={item.id} item={item} />
      ))}
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
});