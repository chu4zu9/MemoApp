import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";

export default function MemoDetailScreen() {
  return (
    <View>
      <AppBar />

      <View>
        <Text>買い物リスト</Text>
        <Text>2020年12月24日 10:00</Text>
      </View>

      <ScrollView>
        <Text>買い物リスト</Text>
      </ScrollView>

      <CircleButton>+</CircleButton>
    </View>
  );
}
