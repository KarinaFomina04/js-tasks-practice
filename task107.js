/* 📌 Задача 107. Для массива целых чисел сначала оставь значения, встречающиеся ровно один раз; затем найди длину самой длинной цепочки последовательных целых без учёта порядка и дублей. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const counts = new Map();
  for (const x of items) counts.set(x, (counts.get(x) ?? 0) + 1);
  return items.filter(x => counts.get(x) === 1);
}

function analyze(a) {
  const values = new Set(a); let best = 0;
  for (const x of values) if (!values.has(x - 1)) { let end = x; while (values.has(end + 1)) end++; best = Math.max(best, end - x + 1); }
  return best;
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[-1,0,2],"answer":2}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":0}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[],"answer":0}
