import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const router = useRouter();

const openAbsenceModal = (userId: string) => {
  router.push(`/modal/absenceStats?userId=${userId}`);
};
export default function staff() {
  return (
    <View>
      <Text>staff</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
