// components/StatCard.js
import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

export default function StatCard({
  icon,
  value,
  label,
  tint = "#FEF9C3", // très pâle
  border = "#FDE68A",
}) {
  const Icon = icon;
  return (
    <View style={[styles.frame, { borderColor: border }]}>
      <View
        style={[
          styles.card,
          Platform.OS === "web" ? { boxShadow: "0 10px 24px rgba(2,6,23,0.06)" } : {},
        ]}
      >
        <View style={[styles.iconWrap, { backgroundColor: tint }]}>
          <Icon size={20} color="#0f172a" />
        </View>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    borderRadius: 20,      // rayon externe plus grand
    borderWidth: 1,
    padding: 6,            // anneau coloré
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    paddingVertical: 22,
    paddingHorizontal: 16,
    alignItems: "center",
    gap: 8,
  },
  iconWrap: {
    height: 40,
    width: 40,
    borderRadius: 999,     // cercle (pas carré arrondi)
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  value: { fontSize: 28, fontWeight: "800", color: "#0f172a" },
  label: { fontSize: 13, color: "#475569" },
});
