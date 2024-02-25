import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Image} from 'react-native';
import { Link } from 'expo-router';
import Item from './components/Item'
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import Title from './components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title></Title>
      <StatusBar style="auto" />
      <Item num={1} text={getRandomMessage()}></Item>
      <Item num={2} text={getRandomMessage()}></Item>
      <Item num={3} text={getRandomMessage()}></Item>
    
      <Link href="/finishScreen" asChild>
        <Button
            title="Done"
            color="#f194ff"
        />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function getRandomMessage() {
  const OutdoorsJson = [
    "A pinecone",
    "A four-leaf clover",
    "A team member's reflection in a puddle",
    "A flower",
    "A piece of litter to dispose of",
    "Neon-colored sunglasses",
    "Neon-colored graffiti or street art",
    "A discarded newspaper or magazine",
    "A piece of bark",
    "A team member doing a cartwheel",
    "American flag",
    "Green light",
    "Stop sign",
    "Bug car (vw beetle)",
    "Motorcycle",
    "Trash can",
    "Bird",
    "Tennis Ball",
    "Fire hydrant",
    "Basketball hoop",
    "Umbrella",
    "Swing set",
    "Dog",
    "Bumper sticker"
  ];

  const IndoorsJson = [
    "A red stapler",
    "A feather pillow",
    "A rubber duck",
    "A scented candle",
    "A pair of mismatched socks",
    "A glow stick",
    "Neon sticky notes",
    "A neon-colored item of clothing",
    "A cookbook with a dessert recipe",
    "A DVD of a classic movie",
    "A team member wearing a hat with a unique shape",
    "A keychain with an animal-shaped charm",
    "Anything with the color magenta",
    "A children's book",
    "A vintage clock",
    "A bookmark with a tassel",
    "A pair of fuzzy socks",
    "A non-digital board game",
    "A framed photo of a pet",
    "A coffee mug with a funny saying",
    "A USB flash drive",
    "Ruler",
    "Toothpaste",
    "Paper Airplane",
    "Crayons",
    "Coffee Machine",
    "Gaming laptop",
    "Bed",
    "Hairdryer",
    "Backpack",
    "A jar of peanut butter",
    "Pink eraser",
    "A stick of gum",
    "Orange highlighter",
    "50 connected staples"
  ];

  const randomArray = Math.random() < 0.5 ? OutdoorsJson : IndoorsJson;
  const randomIndex = Math.floor(Math.random() * randomArray.length);
  return randomArray[randomIndex];
}