import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs initialRouteName="absence">
      <Tabs.Screen name="absence" options={{ title: 'Prombūtne' }} />
      <Tabs.Screen name="addData" options={{ title: 'Pievienot' }} />
      <Tabs.Screen name="staff" options={{ title: 'Personāls' }} />
    </Tabs>
  );
}
