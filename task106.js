/* 📌 Задача 106. Для массива целых чисел сначала построй суммы полных скользящих окон длины три; затем найди длину самой длинной цепочки последовательных целых без учёта порядка и дублей. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const result = [];
  for (let i = 2; i < items.length; i++) result.push(items[i - 2] + items[i - 1] + items[i]);
  return result;
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[5,2,5],"answer":1}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":0}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[4,5],"answer":2}
