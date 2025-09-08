// components/TopNav.js
import React from "react";
import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Baby, Search, Heart, MessageSquare, Notebook, Calculator, Cog } from "lucide-react-native";

const C = {
  white: "#ffffff",
  slate900: "#0F172A",
  slate700: "#334155",
  slate600: "#475569",
  gray200: "#E5E7EB",
  rose100: "#FFE4E6",
  rose500: "#F43F5E",
  rose700: "#BE123C",
};

const GAP_PILLS = 8;   // écart entre puces
const PAD_LEFT  = 8;   // padding gauche très réduit
const PAD_RIGHT = 24;  // padding droit standard
const BRAND_SHIFT = -120; // nudge fiable (px) vers la gauche

export default function TopNav({ active = "Rechercher" }) {
  return (
    <View style={styles.bar}>
      <LinearGradient
        colors={["#FFF6F8", "#FFFFFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
        pointerEvents="none"
      />

      <View style={styles.inner}>
        {/* Marque à gauche */}
        <View style={styles.brandGroup}>
          <LinearGradient
            colors={["#FECDD3", "#FDE68A"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.logoSquare}
          >
            <Baby size={32} strokeWidth={2} color={C.rose500} />
          </LinearGradient>

          <View style={{ marginLeft: 12 }}>
            <Text style={styles.brand}>MaGardeMaternelle</Text>
            <Text style={styles.tagline}>La garde d’enfant, en confiance.</Text>
          </View>
        </View>

        {/* Puces centrées */}
        <View style={[styles.center, { gap: GAP_PILLS }]}>
          <NavPill label="Rechercher" icon={Search} active={active === "Rechercher"} />
          <NavPill label="Favoris" icon={Heart} active={active === "Favoris"} />
          <NavPill label="Messages" icon={MessageSquare} active={active === "Messages"} />
          <NavPill label="Cahier" icon={Notebook} active={active === "Cahier"} />
          <NavPill label="Simulateur" icon={Calculator} active={active === "Simulateur"} />
        </View>

        {/* Engrenage (droite) */}
        <View style={styles.right}>
          <Pressable style={styles.iconBtn} accessibilityLabel="Paramètres">
            <Cog size={20} color={C.slate700} strokeWidth={2} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

function NavPill({ label, icon: Icon, active }) {
  const color = active ? C.rose700 : C.slate700;
  return (
    <Pressable style={[styles.pillBase, active ? styles.pillActive : styles.pillInactive]} accessibilityRole="button">
      <Icon size={16} color={color} />
      <Text style={[styles.pillText, { color }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bar: {
    position: "relative",
    width: "100%",
    backgroundColor: C.white,
    borderBottomWidth: 1,
    borderBottomColor: C.rose100,
  },
  inner: {
    height: 80,
    maxWidth: 1280,
    alignSelf: "center",
    paddingLeft: PAD_LEFT,   // ← asymétrique
    paddingRight: PAD_RIGHT,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  // Marque (nudge fiable via transform)
  brandGroup: {
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 0,
    transform: [{ translateX: BRAND_SHIFT }], // ← décale vraiment vers la gauche
  },
  logoSquare: {
    height: 56, width: 56, borderRadius: 16,
    alignItems: "center", justifyContent: "center",
    ...Platform.select({
      web: { boxShadow: "0 4px 6px -1px rgba(0,0,0,0.10), 0 2px 4px -2px rgba(0,0,0,0.10)" },
      default: {},
    }),
  },
  brand:   { fontSize: 24, fontWeight: "700", lineHeight: 20, color: C.slate900 },
  tagline: { fontSize: 12, color: C.slate600, marginTop: 6 },

  center: {
    flex: 1, minWidth: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  pillBase: {
    flexDirection: "row", alignItems: "center",
    gap: 8, height: 36, paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8,
  },
  pillActive: { backgroundColor: C.rose100 },
  pillInactive: { backgroundColor: "transparent" },
  pillText: { fontSize: 14, lineHeight: 20, fontWeight: "600" },

  right: { width: 56, alignItems: "flex-end", flexShrink: 0 },
  iconBtn: {
    height: 36, width: 36, borderRadius: 999, marginRight: -120,
    alignItems: "center", justifyContent: "center",
    backgroundColor: "#F8FAFC",
    borderWidth: 1, borderColor: C.gray200,
  },
});
