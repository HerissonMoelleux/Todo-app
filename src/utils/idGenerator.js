let counter = 0;

export const generateId = () => {
  counter = (counter + 1) % 1000;
  return Date.now() * 1000 + counter;
};
