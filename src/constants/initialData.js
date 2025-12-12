export const INITIAL_TASKS = {
  today: [
    { id: 1, content: "Познакомиться с теорией запросов", isComplete: false },
    { id: 2, content: "Сделать задание по Graphic Design'", isComplete: false },
    { id: 3, content: "Забрать кольцо с Wildberries", isComplete: true },
    { id: 4, content: "Ознакомиться с Axios", isComplete: false },
  ],

  tomorrow: [
    { id: 9, content: "Посмотреть видео про TypeScript", isComplete: false },
    {
      id: 10,
      content: "Подготовиться к уроку Codify(HTML&CSS) ",
      isComplete: false,
    },
    { id: 11, content: "Забрать кольцо с Wildberries", isComplete: false },
    { id: 12, content: "Побриться", isComplete: false },
  ],

  week: [
    {
      id: 5,
      content: "Начать делать задачи по Cybersecurity",
      isComplete: false,
    },
    { id: 6, content: "Закончить курс по React", isComplete: false },
    {
      id: 7,
      content: "State Manager (Redux + RTK, Zustand)",
      isComplete: false,
    },
    {
      id: 8,
      content: "Узнать о TanStack Query и React Hook Form",
      isComplete: false,
    },
  ],
};
