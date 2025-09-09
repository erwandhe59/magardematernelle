import React from "react";
import { View, Text, StyleSheet, Platform, Pressable, ScrollView } from "react-native";
import TopNav from "../components/TopNav";
import SearchHero from "../components/SearchHero";
import StatsRow from "../components/StatsRow";
import AssistantsGrid from "../components/AssistantsGrid";

const LEFT_OVERSHOOT = 48; // décale la section résultats 48px plus à gauche que les StatCards

export default function SearchScreen() {
  return (
    <View style={styles.page}>
      <TopNav />
      <ScrollView contentContainerStyle={styles.scroll} scrollEventThrottle={16}>
        <SearchHero />

        <View className="roseBand" style={styles.roseBand}>
          <View style={styles.bandContainer}>
            <StatsRow />

            <View
              style={[
                styles.resultsWrap,
                Platform.OS === "web"
                  ? {
                      marginLeft: -LEFT_OVERSHOOT,
                      width: `calc(100% + ${LEFT_OVERSHOOT}px)`,
                    }
                  : null,
              ]}
            >
              <View style={styles.resultsHead}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.resultsTitle}>9 assistante(s) trouvée(s)</Text>
                  <Text style={styles.resultsSub}>Découvrez des profils sélectionnés avec soin.</Text>
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
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FFF1F2" },
  scroll: { paddingBottom: 48 },

  roseBand: { backgroundColor: "#FFF1F2", paddingTop: 18, paddingBottom: 40 },

  // conteneur des contenus de la bande
  bandContainer: {
    width: "100%",
    maxWidth: 1248,
    alignSelf: "center",
    paddingHorizontal: 24,
  },

  // bloc résultats : large + plus bas
  resultsWrap: {
    width: "100%",
    alignSelf: "stretch",
    marginTop: 110, // grosse marge sous les StatCards
  },

  resultsHead: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 16,
  },
  resultsTitle: { fontSize: 24, lineHeight: 28, fontWeight: "700", color: "#0F172A" },
  resultsSub: { marginTop: 4, fontSize: 14, lineHeight: 20, color: "#475569" },

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

  gridWrap: { alignSelf: "stretch" },
});
