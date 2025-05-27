import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import AddTask from '../components/AddTask';
import TaskItem from '../components/TaskItem';
import { loadTasks, saveTasks } from '../utils/storage';

export default function HomeScreen() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks().then(setTasks);
  }, []);

  const addTask = (text) => {
    const newTask = { id: Date.now().toString(), text, completed: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <AddTask onAdd={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        )}
      />
    </View>
  );
}