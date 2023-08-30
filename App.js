import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [inputSentence, setInputSentence] = useState('');
  const [inputLetter, setInputLetter] = useState('');
  const [count, setCount] = useState(0);

  const countLettersBetweenDuplicates = () => {
    let totalCount = 0;
    let insideCount = 0;
    let insideFlag = false;

    for (let i = 0; i < inputSentence.length; i++) {
      if (inputSentence[i] === inputLetter) {
        if (insideFlag) {
          totalCount += insideCount;
          insideCount = 0;
        } else {
          insideFlag = true;
        }
      } else if (insideFlag) {
        insideCount++;
      }
    }

    setCount(totalCount);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Enter a sentence:</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 5, marginBottom: 10 }}
        placeholder="Enter sentence"
        value={inputSentence}
        onChangeText={setInputSentence}
      />

      <Text>Enter a letter:</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 5, marginBottom: 10 }}
        placeholder="Enter letter"
        value={inputLetter}
        onChangeText={setInputLetter}
        maxLength={1}
      />

      <Button title="Count Letters" onPress={countLettersBetweenDuplicates} />

      <Text>{`Count: ${count}`}</Text>

      <StatusBar style="auto" />
    </View>
  );
}