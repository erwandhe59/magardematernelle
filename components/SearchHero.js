// components/SearchHero.js
import React from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MapPin, SlidersHorizontal, Search } from "lucide-react-native";

const C = {
  white: "#ffffff",
  slate800: "#1E293B",   // titre
  slate600: "#475569",   // sous-titre
  slate500: "#64748b",
  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  roseBorder: "#FFE4E6", // bordure groupe (maquette)
};

export default function SearchHero() {
  return (
    <View style={styles.wrapWhite}>
      <View style={styles.container}>
        <Text style={styles.title}>Trouvez l’assistante maternelle idéale</Text>
        <Text style={styles.subtitle}>
          Recherchez parmi des profils vérifiés et trouvez la personne de confiance pour garder votre{"\n"}enfant.
        </Text>

        {/* Groupe recherche — sans ombre, bordure rose */}
        <View style={styles.searchRow}>
          <View style={styles.inputWrap}>
            <MapPin size={18} color={C.slate500} />
            <TextInput
              style={styles.input}
              placeholder="Ville, code postal..."
              placeholderTextColor="#94a3b8"
            />
          </View>

          <Pressable style={styles.filterBtn}>
            <SlidersHorizontal size={16} color={C.slate800} />
            <Text style={styles.filterText}>Filtres</Text>
          </Pressable>

          <Pressable style={styles.searchBtn} accessibilityRole="button">
            <LinearGradient
              colors={["#F43F5E", "#EF476F"]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={styles.searchGrad}
            >
              <Search size={16} color={C.white} />
              <Text style={styles.searchText}>Rechercher</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // SECTION HERO : fond blanc plus haut (garde si OK pour toi)
  wrapWhite: {
    width: "100%",
    backgroundColor: C.white,
    paddingTop: 80,
    paddingBottom: 84,
  },
  container: {
    width: "100%",
    maxWidth: 1140,
    alignSelf: "center",
    paddingHorizontal: 24,
  },

  // Titre 48/48 poids 700 (maquette)
  title: {
    fontSize: 48,
    lineHeight: 48,
    fontWeight: "700",
    color: C.slate800,
    textAlign: "center",
  },
  // Sous-titre 18/28
  subtitle: {
    marginTop: 12,
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "400",
    color: C.slate600,
    textAlign: "center",
  },

  // === GROUPE RECHERCHE (autour de la barre) ===
  searchRow: {
    marginTop: 28,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    alignSelf: "center",
    backgroundColor: C.white,
    borderRadius: 16,
    borderWidth: 1,                 // bordure du groupe
    borderColor: C.roseBorder,      // <- #FFE4E6 (maquette)
    padding: 10,
    // pas d'ombre !
  },

  // Champ : PLUS HAUT et PLUS COURT
  inputWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: C.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 64,                     // ↑ plus haut
    width: 520,                     // ↓ plus court
    borderWidth: 1,
    borderColor: C.gray200,
  },
  input: { flex: 1, fontSize: 14, lineHeight: 20 },

  // Bouton Filtres : même hauteur que l'input
  filterBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderRadius: 12,
    height: 64,
    paddingHorizontal: 16,
    backgroundColor: C.white,
    borderWidth: 1,
    borderColor: C.gray200,
  },
  filterText: { fontSize: 14, lineHeight: 20, fontWeight: "600", color: C.slate800 },

  // Bouton Rechercher : même hauteur, PAS d'ombre
  searchBtn: { borderRadius: 12, overflow: "hidden", height: 64 },
  searchGrad: {
    height: 64,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderRadius: 12,
    // pas d'ombre ici non plus
  },
  searchText: { color: C.white, fontWeight: "600", fontSize: 14, lineHeight: 20 },
});
