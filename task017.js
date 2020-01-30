/* 📌 Задача 017. Для массива целых чисел сначала оставь значения, встречающиеся ровно один раз; затем найди длину строго возрастающей подпоследовательности за O(n log n). Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Senior. */

function prepare(items) {
  const counts = new Map();
  for (const x of items) counts.set(x, (counts.get(x) ?? 0) + 1);
  return items.filter(x => counts.get(x) === 1);
}

function analyze(a) {
  const tails = [];
  for (const x of a) {
    let left = 0, right = tails.length;
    while (left < right) { const mid = (left + right) >>> 1; if (tails[mid] < x) left = mid + 1; else right = mid; }
    tails[left] = x;
  }
  return tails.length;
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[-1,0,2],"answer":3}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":0}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[],"answer":0}
