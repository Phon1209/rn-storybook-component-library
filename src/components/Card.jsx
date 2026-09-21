import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  borderRadius,
  cardBackground,
  cardLabel,
  spacing,
} from '../token.js';

/**
 * A surface for one or two-column health summary tiles.
 *
 * @param {{ label: string, children: React.ReactNode, style?: object }} props
 */
export function Card({ label, children, style }) {
  return (
    <View style={[styles.card, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: cardBackground,
    borderRadius: borderRadius.lg,
    minHeight: 160,
    overflow: 'hidden',
    padding: spacing.lg,
  },
  label: {
    color: cardLabel,
    fontSize: 12,
    fontWeight: '600',
    left: spacing.lg,
    letterSpacing: 0.4,
    position: 'absolute',
    textTransform: 'uppercase',
    top: spacing.lg,
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingTop: spacing.lg,
  },
});

export default Card;
