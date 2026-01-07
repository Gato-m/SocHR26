import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';

export default function ExportOptionsModal() {
  const router = useRouter();

  const [fileName, setFileName] = useState('');
  const [format, setFormat] = useState('csv');

  const handleSave = () => {
    console.log('Eksporta dati:', { fileName, format });
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Faila nosaukums:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ievadi faila nosaukumu"
        value={fileName}
        onChangeText={setFileName}
      />

      <Text style={styles.label}>Formāts:</Text>
      <Picker selectedValue={format} onValueChange={setFormat} style={styles.picker}>
        <Picker.Item label="CSV" value="csv" />
        <Picker.Item label="PDF" value="pdf" />
        <Picker.Item label="JSON" value="json" />
      </Picker>

      <Button title="Eksportēt" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 16, justifyContent: 'center' },
  label: { fontSize: 16, fontWeight: '600' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 6 },
  picker: { height: 50, width: '100%' },
});
