/* 📌 Задача 047. Для массива целых чисел сначала оставь значения, встречающиеся ровно один раз; затем найди ближайшее строго большее значение справа от каждого элемента, при отсутствии верни null. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const counts = new Map();
  for (const x of items) counts.set(x, (counts.get(x) ?? 0) + 1);
  return items.filter(x => counts.get(x) === 1);
}

function analyze(a) {
  const result = Array(a.length).fill(null), stack = [];
  for (let i = 0; i < a.length; i++) { while (stack.length && a[stack.at(-1)] < a[i]) result[stack.pop()] = a[i]; stack.push(i); }
  return result;
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[-1,0,2],"answer":[0,2,null]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[],"answer":[]}
