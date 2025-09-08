// screens/SearchScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TopNav from "../components/TopNav";
import SearchHero from "../components/SearchHero";
import StatsRow from "../components/StatsRow";

export default function SearchScreen() {
  return (
    <View style={styles.page}>
      <TopNav />
      <SearchHero />
      <View style={styles.roseBand}>
        <View style={styles.container}>
          <StatsRow />
          <Text style={styles.resultsTitle}>9 assistante(s) trouvée(s)</Text>
          <View style={styles.resultsBox} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFF1F2" },
  roseBand: { backgroundColor: "#FFF1F2", paddingTop: 18, paddingBottom: 40 },
  container: {
    width: "100%",
    maxWidth: 1140,
    alignSelf: "center",
    paddingHorizontal: 24,
  },
  resultsTitle: { marginTop: 28, fontSize: 18, fontWeight: "700", color: "#0F172A" },
  resultsBox: {
    marginTop: 12, height: 280, borderRadius: 16,
    backgroundColor: "#ffffff", borderWidth: 1, borderColor: "#FEE2E2",
  },
});
