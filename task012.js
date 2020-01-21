/* 📌 Задача 012. Для массива целых чисел сначала замени значения накопленными суммами; затем найди длину строго возрастающей подпоследовательности за O(n log n). Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Senior. */

function prepare(items) {
  let total = 0; return items.map(x => total += x);
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[3,2,5,5,7],"answer":3}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":0}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[1,2,4,6],"answer":4}
