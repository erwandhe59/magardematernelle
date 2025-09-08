// components/StatsRow.js
import React from "react";
import { View, StyleSheet } from "react-native";
import StatCard from "./StatCard";
import { Users, Star, TrendingUp } from "lucide-react-native";

export default function StatsRow() {
  return (
    <View style={styles.row}>
      <StatCard icon={Users} value="9" label="Assistantes disponibles" tint="#FEF9C3" border="#FDE68A" />
      <StatCard icon={Star} value="4.7/5" label="Note moyenne" tint="#FEF9C3" border="#FDE68A" />
      <StatCard icon={TrendingUp} value="14€" label="Tarif horaire moyen" tint="#DCFCE7" border="#BBF7D0" />
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 24, marginTop: 28 },
});
