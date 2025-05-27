import AsyncStorage from '@react-native-async-storage/async-storage';

const TASKS_KEY = '@tasks';

export const saveTasks = async (tasks) => {
  try {
    await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  } catch (e) {
    console.error('Failed to save tasks', e);
  }
};

export const loadTasks = async () => {
  try {
    const tasks = await AsyncStorage.getItem(TASKS_KEY);
    return tasks ? JSON.parse(tasks) : [];
  } catch (e) {
    console.error('Failed to load tasks', e);
    return [];
  }
};