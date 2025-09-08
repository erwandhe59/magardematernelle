// components/AssistantsGrid.js
import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import AssistantCard from "./AssistantCard.js";

const DATA = [
  {
    id: "1",
    name: "Émilie M.",
    city: "Nice",
    rating: 5.0,
    reviews: 20,
    bio: "Experte en pédagogie Montessori, j’accompagne les enfants vers l’autonomie avec bienveillance.",
    badges: ["Agréée", "15 ans exp."],
    price: "18€/h",
    avatar: { initials: "EM", color: "#FEE2E2" },
  },
  {
    id: "2",
    name: "Julie L.",
    city: "Marseille",
    rating: 4.9,
    reviews: 15,
    bio: "12 ans d’expérience, j’encourage l’épanouissement dans le respect des rythmes.",
    badges: ["Agréée", "12 ans exp."],
    price: "16€/h",
    avatar: { initials: "JL", color: "#FFE4E6" },
  },
  // ...ajoute d'autres entrées si besoin
];

export default function AssistantsGrid() {
  return (
    <View
      style={[
        styles.grid,
        Platform.OS === "web"
          ? {
              display: "grid",
              gridTemplateColumns: "481px 481px",
              columnGap: "24px",
              rowGap: "24px",
              width: "986px",
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
    // couleurs/typo comme tes blocs
    color: "rgb(9, 9, 11)",
    boxSizing: "border-box",
    opacity: 1,
    pointerEvents: "auto",
  },
});
