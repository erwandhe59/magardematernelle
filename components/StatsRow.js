// components/StatsRow.js
import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import StatCard from "./StatCard";
import { Users, Star, TrendingUp } from "lucide-react-native";

export default function StatsRow() {
  return (
    <View
      style={[
        styles.row,
        Platform.OS === "web"
          ? {
              display: "grid",
              gridTemplateColumns: "repeat(3, 400px)", // ← 3 cartes de 400px
              columnGap: 24,
              rowGap: 0,
              width: "100%",
              justifyContent: "center",                // ← centre l’ensemble
            }
          : {},
      ]}
    >
      <StatCard icon={Users} value="9" label="Assistantes disponibles"
        tint="rgba(254,226,226,0.8)" border="rgb(255,228,230)" width={400} />
      <StatCard icon={Star} value="4.7/5" label="Note moyenne"
        tint="rgb(254,249,195)" border="rgb(253,230,138)" width={400} />
      <StatCard icon={TrendingUp} value="14€" label="Tarif horaire moyen"
        tint="rgb(220,252,231)" border="rgb(187,247,208)" width={400} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    // natif
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    gap: 24,
    flexWrap: "nowrap",
    marginTop: 28,
  },
});
