// components/AssistantCard.js
import React from "react";
import { View, Text, StyleSheet, Platform, Pressable } from "react-native";
import { MapPin, Star, ShieldCheck } from "lucide-react-native";

export default function AssistantCard({
  name,
  city,
  rating,
  reviews,
  bio,
  badges = [],
  price,
  avatar = { initials: "SM", color: "#FFE4E6" },
}) {
  return (
    <View
      style={[
        styles.card,
        Platform.OS === "web"
          ? { boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }
          : {},
      ]}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={[styles.avatar, { backgroundColor: avatar.color }]}>
          <Text style={styles.avatarText}>{avatar.initials}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.metaRow}>
            <MapPin size={14} color="#64748b" />
            <Text style={styles.metaText}>{city}</Text>
            <Star size={14} color="#f59e0b" />
            <Text style={styles.metaText}>
              {rating} ({reviews} avis)
            </Text>
          </View>
        </View>
      </View>

      {/* Bio */}
      <Text numberOfLines={2} style={styles.bio}>
        {bio}
      </Text>

      {/* Badges + Price */}
      <View style={styles.footer}>
        <View style={styles.badges}>
          {badges.map((b) => (
            <View key={b} style={styles.badge}>
              <ShieldCheck size={13} color="#16a34a" />
              <Text style={styles.badgeText}>{b}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.price}>{price}</Text>
      </View>

      {/* CTA */}
      <Pressable style={styles.cta}>
        <Text style={styles.ctaText}>Voir le profil</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 481,
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgb(229, 231, 235)", // #E5E7EB
    padding: 16,
  },
  header: { flexDirection: "row", alignItems: "center", gap: 12, marginBottom: 8 },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: { fontWeight: "800", color: "#0f172a" },
  name: { fontSize: 16, fontWeight: "700", color: "#0f172a", marginBottom: 2 },
  metaRow: { flexDirection: "row", alignItems: "center", gap: 6 },
  metaText: { fontSize: 13, color: "#64748b", marginRight: 8 },
  bio: { color: "#334155", fontSize: 14, lineHeight: 20, marginVertical: 10 },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 2,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "rgb(229, 231, 235)",
  },
  badges: { flexDirection: "row", gap: 8, flexWrap: "wrap" },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: "rgba(22,163,74,0.08)",
    borderWidth: 1,
    borderColor: "rgba(22,163,74,0.18)",
  },
  badgeText: { fontSize: 12, color: "#065f46", fontWeight: "600" },
  price: { fontSize: 18, fontWeight: "800", color: "#dc2626" },
  cta: {
    marginTop: 12,
    height: 44,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ec375f",
  },
  ctaText: { color: "#fff", fontWeight: "700" },
});
