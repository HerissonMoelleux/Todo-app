let counter = 0;

export const generateId = () => {
  // Используем комбинацию timestamp + counter для уникальности
  // даже при быстром создании нескольких задач
  counter = (counter + 1) % 1000;
  return Date.now() * 1000 + counter;
};
