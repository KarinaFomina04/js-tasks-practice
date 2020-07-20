/* 📌 Задача 120. Для массива целых чисел сначала построй расстояния между последовательными появлениями одинаковых значений; затем построй максимумы полных окон длины два монотонной очередью. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const last = new Map(); const result = [];
  items.forEach((x, i) => {
    if (last.has(x)) result.push(i - last.get(x));
    last.set(x, i);
  });
  return result;
}

function analyze(a) {
  const deque = [], result = []; let head = 0;
  for (let i = 0; i < a.length; i++) {
    while (deque.length > head && deque[head] <= i - 2) head++;
    while (deque.length > head && a[deque.at(-1)] <= a[i]) deque.pop();
    deque.push(i); if (i >= 1) result.push(a[deque[head]]);
  }
  return result;
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[2],"answer":[]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[1,1],"answer":[1]}
