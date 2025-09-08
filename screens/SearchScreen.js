// screens/SearchScreen.js
import React from "react";
import { View, Text, StyleSheet, Platform, Pressable, ScrollView } from "react-native";
import TopNav from "../components/TopNav";
import SearchHero from "../components/SearchHero";
import StatsRow from "../components/StatsRow";
import AssistantsGrid from "../components/AssistantsGrid";

export default function SearchScreen() {
  return (
    <View style={styles.page}>
      <TopNav />
      <ScrollView
        contentContainerStyle={styles.scroll}
        // évite "rebond" trop violent sur iOS web
        scrollEventThrottle={16}
      >
        <SearchHero />

        <View style={styles.roseBand}>
          <View style={styles.container}>
            <StatsRow />

            <View style={styles.resultsHead}>
              <View style={{ flex: 1 }}>
                <Text style={styles.resultsTitle}>9 assistante(s) trouvée(s)</Text>
                <Text style={styles.resultsSub}>
                  Découvrez des profils sélectionnés avec soin.
                </Text>
              </View>
              <Pressable style={styles.refineBtn} accessibilityRole="button">
                <Text style={styles.refineText}>Affiner la recherche</Text>
              </Pressable>
            </View>

            <View style={styles.gridWrap}>
              <AssistantsGrid />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFF1F2" },
  scroll: { paddingBottom: 48 }, // de l’air en bas pour scroller
  roseBand: { backgroundColor: "#FFF1F2", paddingTop: 18, paddingBottom: 40 },
  container: {
    width: "100%",
    maxWidth: 1140,
    alignSelf: "center",
    paddingHorizontal: 24,
  },
  resultsHead: {
    marginTop: 28,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  resultsTitle: { fontSize: 18, fontWeight: "700", color: "#0F172A" },
  resultsSub: { marginTop: 4, fontSize: 14, color: "#475569" },
  refineBtn: {
    borderWidth: 1,
    borderColor: "rgb(226, 232, 240)",
    backgroundColor: "#fff",
    height: 38,
    paddingHorizontal: 14,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    ...(Platform.OS === "web" ? { boxShadow: "0 1px 2px rgba(0,0,0,0.04)" } : {}),
  },
  refineText: { color: "#0F172A", fontWeight: "600", fontSize: 13 },
  gridWrap: {
    marginTop: 16,
    alignItems: "center",
    width: "100%",
  },
});
