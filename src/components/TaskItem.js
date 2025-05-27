import { Checkbox, Text, TouchableRipple } from 'react-native-paper';

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <TouchableRipple onPress={() => onToggle(task.id)}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <Checkbox status={task.completed ? 'checked' : 'unchecked'} />
        <Text style={{ flex: 1, textDecorationLine: task.completed ? 'line-through' : 'none' }}>
          {task.text}
        </Text>
        <TouchableRipple onPress={() => onDelete(task.id)}>
          <Text style={{ color: 'red' }}>Supprimer</Text>
        </TouchableRipple>
      </View>
    </TouchableRipple>
  );
}