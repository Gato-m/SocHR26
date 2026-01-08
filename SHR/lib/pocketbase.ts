import PocketBase from 'pocketbase';

// Initialize PocketBase client
// Use your computer's IP address instead of localhost for React Native
// You can find your IP with: ifconfig | grep "inet " (macOS/Linux) or ipconfig (Windows)
const pb = new PocketBase('http://192.168.32.16:8091');

// Disable auto cancellation for React Native
pb.autoCancellation(false);

export default pb;

// TypeScript types for userData collection
export interface UserData {
  id: string;
  role: string;
  name: string;
  position: string;
  phone: string;
  email: string;
  avatar?: string;
  created: string;
  updated: string;
}
