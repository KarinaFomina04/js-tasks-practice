/* 📌 Задача 037. Для массива целых чисел сначала оставь значения, встречающиеся ровно один раз; затем посчитай непрерывные подмассивы с нулевой суммой. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const counts = new Map();
  for (const x of items) counts.set(x, (counts.get(x) ?? 0) + 1);
  return items.filter(x => counts.get(x) === 1);
}

function analyze(a) {
  const counts = new Map([[0, 1]]); let sum = 0, result = 0;
  for (const x of a) { sum += x; result += counts.get(sum) ?? 0; counts.set(sum, (counts.get(sum) ?? 0) + 1); }
  return result;
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[-1,0,2],"answer":1}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":0}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[],"answer":0}
