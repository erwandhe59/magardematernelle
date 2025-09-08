// components/TopNav.js
import React from "react";
import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import {
  Baby, Search, Heart, MessageSquare, Notebook, Calculator, Settings,
} from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";

const C = {
  white: "#ffffff",
  slate900: "#0f172a",
  slate700: "#334155",
  slate600: "#475569",
  slate100: "#f1f5f9",
  gray200: "#e2e8f0",
  rose100: "#ffe4e6",
  rose600: "#e11d48",
};

export default function TopNav() {
  return (
    <View style={styles.bar}>
      <View style={styles.inner}>
        {/* Capsule marque à gauche (comme la maquette) */}
        <View style={styles.brandCapsule}>
          <LinearGradient
            colors={["#FFE7EA", "#FFEDEF"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.brandCapsuleBg}
          />
          <View style={styles.brandCircle}>
            <Baby size={20} color={C.rose600} />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.brand}>MaGardeMaternelle</Text>
            <Text style={styles.tagline}>La garde d’enfant, en confiance.</Text>
          </View>
        </View>

        {/* Groupe centré */}
        <View style={styles.center}>
          <NavPill label="Rechercher" icon={Search} active />
          <NavPill label="Favoris" icon={Heart} />
          <NavPill label="Messages" icon={MessageSquare} />
          <NavPill label="Cahier" icon={Notebook} />
          <NavPill label="Simulateur" icon={Calculator} />
        </View>

        {/* Action droite */}
        <View style={styles.right}>
          <IconButton icon={Settings} />
        </View>
      </View>
    </View>
  );
}

function NavPill({ label, icon: Icon, active }) {
  const bg = active ? "#FDE2E7" : "#F8FAFC";
  const color = active ? C.rose600 : C.slate700;
  return (
    <Pressable style={[styles.pill, { backgroundColor: bg }]}>
      <Icon size={16} color={color} />
      <Text style={[styles.pillText, { color }]}>{label}</Text>
    </Pressable>
  );
}
function IconButton({ icon: Icon }) {
  return (
    <Pressable style={styles.iconBtn}>
      <Icon size={18} color={C.slate700} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bar: {
    width: "100%",
    backgroundColor: C.white,
    borderBottomWidth: 1,
    borderBottomColor: C.slate100,
  },
  inner: {
    height: 80,                   // même hauteur que la maquette
    maxWidth: 1140,               // conteneur large
    alignSelf: "center",
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },

  // Capsule marque
  brandCapsule: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 999,
    overflow: "visible",
  },
  brandCapsuleBg: {
    ...Platform.select({
      web: { boxShadow: "0 10px 30px rgba(225,29,72,0.10)" },
      default: {},
    }),
    position: "absolute",
    inset: 0,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#FFD6DD",
  },
  brandCircle: {
    height: 36,
    width: 36,
    borderRadius: 999,
    backgroundColor: C.rose100,
    alignItems: "center",
    justifyContent: "center",
  },
  brand: { fontSize: 18, fontWeight: "700", color: C.slate900, lineHeight: 20 },
  tagline: { fontSize: 12, color: C.slate600, marginTop: 2 },

  // Nav centrée
  center: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  right: { width: 56, alignItems: "flex-end" },

  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 14,
    height: 40,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: C.gray200,
  },
  pillText: { fontSize: 13, fontWeight: "600" },

  iconBtn: {
    height: 36,
    width: 36,
    borderRadius: 999,
    backgroundColor: "#F8FAFC",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: C.gray200,
  },
});
