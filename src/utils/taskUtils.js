export const removeTask = (id, list) => {
  return list.filter((task) => task.id !== id);
};

export const toggleTask = (id, list) => {
  return list.map((task) =>
    task.id === id ? { ...task, isComplete: !task.isComplete } : task
  );
};
