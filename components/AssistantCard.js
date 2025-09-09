import React from "react";
import { View, Text, StyleSheet, Platform, Pressable, Image } from "react-native";
import { MapPin, Star, ShieldCheck, Heart, MessageSquare } from "lucide-react-native";

const WEB_CARD_W = 396; // largeur maquette (3 colonnes avec 24px de gap)

export default function AssistantCard({
  name,
  city,
  rating,
  reviews,
  bio,
  badges = [],
  price,
  avatar = { initials: "SM", color: "#FFE4E6", uri: null },
}) {
  return (
    <View style={[styles.card, Platform.OS === "web" ? { boxShadow: "0 1px 2px rgba(0,0,0,0.05)" } : {}]}>
      <Pressable style={styles.favBtn} accessibilityRole="button">
        <Heart size={16} color="#64748B" />
      </Pressable>

      <View style={styles.header}>
        <View style={[styles.avatar, { backgroundColor: avatar.color }]}>
          {avatar.uri ? <Image source={{ uri: avatar.uri }} style={styles.avatarImg} resizeMode="cover" /> : <Text style={styles.avatarText}>{avatar.initials}</Text>}
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.metaRow}>
            <MapPin size={14} color="#64748b" />
            <Text style={styles.metaText}>{city}</Text>
            <Star size={14} color="#f59e0b" />
            <Text style={styles.metaText}>{rating} ({reviews} avis)</Text>
          </View>
        </View>
      </View>

      <Text numberOfLines={2} style={styles.bio}>{bio}</Text>

      <View style={styles.footer}>
        <View style={styles.badges}>
          {badges.map((b) => {
            const isAgree = /agréée?/i.test(b);
            return (
              <View key={b} style={[styles.badge, isAgree ? styles.badgeGreen : styles.badgePurple]}>
                <ShieldCheck size={13} color={isAgree ? "#16a34a" : "#7c3aed"} />
                <Text style={[styles.badgeText, isAgree ? styles.badgeTextGreen : styles.badgeTextPurple]}>{b}</Text>
              </View>
            );
          })}
        </View>

        <Text style={styles.price}>
          {String(price).replace("€/h", "")}
          <Text style={styles.priceUnit}>€/h</Text>
        </Text>
      </View>

      <View style={styles.ctaRow}>
        <Pressable style={styles.cta} accessibilityRole="button">
          <Text style={styles.ctaText}>Voir le profil</Text>
        </Pressable>
        <Pressable style={styles.secondaryBtn} accessibilityLabel="Contacter" accessibilityRole="button">
          <MessageSquare size={16} color="#64748B" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "relative",
    width: Platform.OS === "web" ? WEB_CARD_W : 481,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgb(229, 231, 235)",
    padding: 16,
  },

  favBtn: {
    position: "absolute",
    top: 12, right: 12,
    height: 28, width: 28, borderRadius: 999,
    backgroundColor: "#FFFFFF",
    borderWidth: 1, borderColor: "rgb(229,231,235)",
    alignItems: "center", justifyContent: "center",
  },

  header: { flexDirection: "row", alignItems: "center", gap: 12, marginBottom: 8 },
  avatar: { width: 44, height: 44, borderRadius: 999, alignItems: "center", justifyContent: "center", overflow: "hidden" },
  avatarImg: { width: "100%", height: "100%" },
  avatarText: { fontWeight: "800", color: "#0f172a" },

  name: { fontSize: 16, fontWeight: "700", color: "#0f172a", marginBottom: 2 },
  metaRow: { flexDirection: "row", alignItems: "center", gap: 6, flexWrap: "wrap" },
  metaText: { fontSize: 13, color: "#64748b", marginRight: 8 },

  bio: { color: "#334155", fontSize: 14, lineHeight: 20, marginTop: 4, marginBottom: 10 },

  footer: {
    flexDirection: "row", alignItems: "center", justifyContent: "space-between",
    marginTop: 2, paddingTop: 10, borderTopWidth: 1, borderTopColor: "rgb(229, 231, 235)",
  },
  badges: { flexDirection: "row", gap: 8, flexWrap: "wrap", maxWidth: Platform.OS === "web" ? WEB_CARD_W - 120 : 340 },

  badge: { flexDirection: "row", alignItems: "center", gap: 6, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 999, borderWidth: 1 },
  badgeGreen: { backgroundColor: "rgba(22,163,74,0.08)", borderColor: "rgba(22,163,74,0.18)" },
  badgePurple:{ backgroundColor: "rgba(124,58,237,0.08)", borderColor: "rgba(124,58,237,0.18)" },
  badgeText: { fontSize: 12, fontWeight: "600" },
  badgeTextGreen: { color: "#065f46" },
  badgeTextPurple:{ color: "#5b21b6" },

  price: { fontSize: 18, fontWeight: "800", color: "#dc2626" },
  priceUnit: { fontSize: 14, fontWeight: "800", color: "#dc2626" },

  ctaRow: { flexDirection: "row", alignItems: "center", gap: 12, marginTop: 12 },
  cta: { flex: 1, height: 44, borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#ec375f" },
  ctaText: { color: "#fff", fontWeight: "700" },

  secondaryBtn: {
    height: 44, width: 44, borderRadius: 10,
    borderWidth: 1, borderColor: "rgb(229,231,235)",
    backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center",
  },
});
