import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function UserProfileEditModal() {
  const router = useRouter();
  const { userId } = useLocalSearchParams();

  const [name, setName] = useState('');
  const [role, setRole] = useState('employee');

  const handleSave = () => {
    console.log('Rediģēts profils:', { userId, name, role });
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Rediģēt lietotāju: {userId}</Text>

      <Text style={styles.label}>Vārds:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ievadi vārdu"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Loma:</Text>
      <Picker selectedValue={role} onValueChange={setRole} style={styles.picker}>
        <Picker.Item label="Darbinieks" value="employee" />
        <Picker.Item label="Vadītājs" value="manager" />
        <Picker.Item label="Admins" value="admin" />
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
