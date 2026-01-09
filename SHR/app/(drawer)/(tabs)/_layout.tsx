import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../../_theme/useTheme';
import { TouchableOpacity, Modal, View, StyleSheet, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useEffect, useRef } from 'react';
import { Text } from '../../../_components/ui/text';
import { Card } from '../../../_components/ui/card';

function MenuButton() {
  const theme = useTheme();
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    if (modalVisible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 300,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [modalVisible]);

  const menuItems = [
    { title: 'Pievienot lietotāju', icon: 'person-add-outline', route: '/(drawer)/addUser' },
    { title: 'Rediģēt lietotājus', icon: 'list-outline', route: '/(drawer)/editUserList' },
  ];

  const handleMenuItemPress = (route: string) => {
    setModalVisible(false);
    router.push(route as any);
  };

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={{ marginRight: 16 }}>
        <Ionicons name="menu" size={28} color={theme.colors.text} />
      </TouchableOpacity>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <TouchableOpacity
            style={styles.dismissArea}
            activeOpacity={1}
            onPress={() => setModalVisible(false)}
          />
          <Animated.View
            style={[
              styles.menuContainer,
              { backgroundColor: theme.colors.surface, transform: [{ translateX: slideAnim }] },
            ]}
          >
            <Text
              style={{
                fontSize: theme.typography.h2,
                fontWeight: '600',
                color: theme.colors.text,
                marginBottom: theme.spacing.md,
              }}
            >
              Izvēlne
            </Text>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleMenuItemPress(item.route)}
                style={[styles.menuItem, { borderBottomColor: theme.colors.text + '20' }]}
              >
                <Ionicons name={item.icon as any} size={24} color={theme.colors.primary} />
                <Text
                  style={{
                    fontSize: theme.typography.body,
                    color: theme.colors.text,
                    marginLeft: theme.spacing.md,
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </Animated.View>
        </View>
      </Modal>
    </>
  );
}

export default function TabsLayout() {
  const theme = useTheme();

  return (
    <Tabs
      initialRouteName="absence"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
        },
        headerStyle: {
          backgroundColor: theme.colors.surface,
        },
        headerTintColor: theme.colors.text,
        headerShown: true,
        headerRight: () => <MenuButton />,
      }}
    >
      <Tabs.Screen
        name="absence"
        options={{
          title: 'Prombūtne',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="addData"
        options={{
          title: 'Pievienot',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="staff"
        options={{
          title: 'Personāls',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  dismissArea: {
    flex: 1,
  },
  menuContainer: {
    width: 280,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: -2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
});
