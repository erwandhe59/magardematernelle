import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

export default function StatCard({
  icon,
  value,
  label,
  tint = "rgb(254, 249, 195)",
  border = "rgb(255, 228, 230)",
  width = 400,          // largeur en natif
  webFullWidth = true,  // en web: la carte prend 100% de sa colonne de grille
}) {
  const Icon = icon;
  const webSize = webFullWidth ? { width: "100%" } : { width };

  return (
    <View
      style={[
        styles.card,
        { borderColor: border },
        Platform.OS === "web"
          ? { ...webSize, boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }
          : { width },
      ]}
    >
      <View style={[styles.iconWrap, { backgroundColor: tint }]}>
        {!!Icon && <Icon size={20} color="#0f172a" />}
      </View>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgb(255, 255, 255)",
    borderColor: "rgb(255, 228, 230)",
    borderWidth: 1,
    borderRadius: 16,
    height: 170,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
    paddingLeft: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrap: {
    height: 40,
    width: 40,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  value: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: "800",
    color: "rgb(9, 9, 11)",
    textAlign: "center",
  },
  label: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 20,
    color: "rgb(9, 9, 11)",
    textAlign: "center",
  },
});
