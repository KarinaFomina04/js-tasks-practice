/* 📌 Задача 069. Для массива целых чисел сначала вычти из каждого элемента медиану исходного массива, для чётной длины возьми нижнюю медиану; затем найди все уникальные пары значений с суммой ноль, не используя элемент дважды. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  if (!items.length) return [];
  const sorted = [...items].sort((a, b) => a - b);
  const median = sorted[Math.floor((sorted.length - 1) / 2)];
  return items.map(x => x - median);
}

function analyze(a) {
  const sorted = [...a].sort((x, y) => x - y), pairs = [];
  let left = 0, right = sorted.length - 1;
  while (left < right) {
    const x = sorted[left], y = sorted[right], sum = x + y;
    if (sum === 0) { pairs.push([x, y]); while (left < right && sorted[left] === x) left++; while (left < right && sorted[right] === y) right--; }
    else if (sum < 0) left++; else right--;
  }
  return pairs;
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[1,-3,1,-2,0],"answer":[]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[0,0,1,1],"answer":[[0,0]]}
