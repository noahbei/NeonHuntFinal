import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, ScrollView} from 'react-native';
import { Link } from 'expo-router';
import Room from './components/Room';
import Title from './components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title></Title>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Room id={'2345'} currentPlayers={3}></Room>
        <Room id={'2346'} currentPlayers={4}></Room>
        <Room id={'2745'} currentPlayers={2}></Room>
        <Room id={'2276'} currentPlayers={3}></Room>
        <Room id={'2388'} currentPlayers={0}></Room>
        <Room id={'2115'} currentPlayers={0}></Room>
        <Room id={'7745'} currentPlayers={1}></Room>
        <Room id={'2351'} currentPlayers={1}></Room>
        <Room id={'2675'} currentPlayers={2}></Room>
        <Room id={'6655'} currentPlayers={4}></Room>
        <Room id={'2365'} currentPlayers={2}></Room>
        <Room id={'4573'} currentPlayers={1}></Room>
        <Room id={'9963'} currentPlayers={3}></Room>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Create Room" color="#f194ff" onPress={() => {}} />
        <Link href={'readyScreen'} asChild>
          <Button title="Join Room" color="#f194ff" onPress={() => {}} />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flexGrow: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 20,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 145
  },
});
