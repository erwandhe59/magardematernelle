import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import AssistantCard from "./AssistantCard";

const DATA = [
  { id: "1", name: "Émilie M.", city: "Nice", rating: 5.0, reviews: 20, bio: "Experte en pédagogie Montessori, j’accompagne les enfants vers l’autonomie avec bienveillance.", badges: ["Agréée", "15 ans exp."], price: "18€/h", avatar: { initials: "EM", color: "#FEE2E2", uri: null } },
  { id: "2", name: "Julie L.", city: "Marseille", rating: 4.9, reviews: 15, bio: "12 ans d’expérience, j’encourage l’épanouissement dans le respect des rythmes.", badges: ["Agréée", "12 ans exp."], price: "16€/h", avatar: { initials: "JL", color: "#FFE4E6", uri: null } },
  { id: "3", name: "Sophie M.", city: "Paris", rating: 4.8, reviews: 15, bio: "Passionnée par l’éveil des tout-petits, j’accompagne avec bienveillance chaque enfant dans son développement.", badges: ["Agréée", "Vérifiée"], price: "12€/h", avatar: { initials: "SM", color: "#FFE4E6", uri: null } },
  { id: "4", name: "Amélie R.", city: "Bordeaux", rating: 4.7, reviews: 11, bio: "Créative et dynamique, j’organise des ateliers artistiques et culturels adaptés à chaque âge.", badges: ["Agréée", "7 ans exp."], price: "17€/h", avatar: { initials: "AR", color: "#FFE4E6", uri: null } },
];

export default function AssistantsGrid() {
  return (
    <View
      style={[
        styles.grid,
        Platform.OS === "web"
          ? {
              display: "grid",
              gridTemplateColumns: "396px 396px 396px", // 3 colonnes larges (maquette)
              columnGap: "24px",
              rowGap: "24px",
              justifyContent: "start",
              width: "auto",
            }
          : { flexDirection: "row", flexWrap: "wrap", gap: 24 },
      ]}
    >
      {DATA.map((a) => (
        <AssistantCard key={a.id} {...a} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    color: "rgb(9, 9, 11)",
    boxSizing: "border-box",
    opacity: 1,
    pointerEvents: "auto",
  },
});
