import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function AbsenceStatsModal() {
  const router = useRouter();
  const { userId } = useLocalSearchParams();

  const [date, setDate] = useState('');
  const [statType, setStatType] = useState('monthly');

  const handleSave = () => {
    console.log('Prombūtnes statistika:', { userId, date, statType });
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Darbinieka ID: {userId}</Text>

      <Text style={styles.label}>Datums:</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        value={date}
        onChangeText={setDate}
      />

      <Text style={styles.label}>Statistikas tips:</Text>
      <Picker selectedValue={statType} onValueChange={setStatType} style={styles.picker}>
        <Picker.Item label="Mēneša" value="monthly" />
        <Picker.Item label="Gada" value="yearly" />
        <Picker.Item label="Kopējā" value="total" />
      </Picker>

      <Button title="Saglabāt" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 16, justifyContent: 'center' },
  label: { fontSize: 16, fontWeight: '600' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 6 },
  picker: { height: 50, width: '100%' },
});
