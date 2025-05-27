import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
// Version avec react-native-paper (optionnel)
import { TextInput as PaperInput, Button as PaperButton } from 'react-native-paper';

export default function AddTask({ onAdd }) {
  const [taskText, setTaskText] = useState('');

  const handleAdd = () => {
    if (taskText.trim()) {
      onAdd(taskText);
      setTaskText('');
    }
  };

  return (
    <View style={styles.container}>
      {/* Version Native */}
      <TextInput
        style={styles.input}
        placeholder="Ajouter une tâche..."
        value={taskText}
        onChangeText={setTaskText}
        onSubmitEditing={handleAdd} // Valide avec la touche "Entrée"
      />
      <Button title="Ajouter" onPress={handleAdd} />

      {/* Version avec react-native-paper (décommentez si utilisé) */}
      {/* <PaperInput
        mode="outlined"
        label="Nouvelle tâche"
        value={taskText}
        onChangeText={setTaskText}
        style={styles.paperInput}
        right={<PaperInput.Icon name="send" onPress={handleAdd} />}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  paperInput: {
    backgroundColor: '#fff',
  },
});