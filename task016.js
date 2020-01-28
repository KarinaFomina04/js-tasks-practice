/* 📌 Задача 016. Для массива целых чисел сначала построй суммы полных скользящих окон длины три; затем найди длину строго возрастающей подпоследовательности за O(n log n). Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Senior. */

function prepare(items) {
  const result = [];
  for (let i = 2; i < items.length; i++) result.push(items[i - 2] + items[i - 1] + items[i]);
  return result;
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[5,2,5],"answer":2}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":0}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[4,5],"answer":2}
