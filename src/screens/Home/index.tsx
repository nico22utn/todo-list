import { View, Text, Keyboard, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import React, { useCallback, useMemo, useState } from 'react';
import Card from '../../components/Card';
import styles from './styles';
import IconButton from '../../components/IconButton';
import CONSTANTS from '../../utils/constants';
import { showToast } from '../../utils';

const Home = () => {
  const [task, setTask] = useState<string>('');
  const [taskItems, setTaskItems] = useState<string[]>([]);
  
  const handleAddTask = useCallback(() => {
    const hasAlreadyTask = taskItems.find((taskItem: string) => taskItem === task);
    if (hasAlreadyTask) {
        showToast(CONSTANTS.duplicateTaskToast)
    } else {
      const items = [...taskItems, task];
      setTaskItems(items);
    }
    Keyboard.dismiss();
    setTask('');
  }, [taskItems, task]);
  

  const deleteTask = useCallback((index: number) => {
    let finalItems = [...taskItems];
    finalItems.splice(index, 1);
    setTaskItems(finalItems);
    showToast(CONSTANTS.deleteTaskToast);
  }, [taskItems]);

  const renderCards = useMemo(() => (
    taskItems.map((item, index) => {
        return (
          <TouchableOpacity key={index}  onPress={() => deleteTask(index)}>
            <Card text={item} /> 
          </TouchableOpacity>
        )
      })
    ), [
    deleteTask,
    taskItems,
  ])
  return (
    <View style={styles.container}>
      {/* In this case, I just chose ScrollView instead of a FlatList */}
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>{CONSTANTS.mainTitle}</Text>
          <View style={styles.items}>{renderCards}</View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TextInput style={styles.input} placeholder={CONSTANTS.placeholderInput} value={task} onChangeText={text => setTask(text)} />
        <IconButton icon='+' onPress={handleAddTask}/>
      </View>
  </View>
  );
};

export default Home;
