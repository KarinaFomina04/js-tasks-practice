/* 📌 Задача 065. Для массива целых чисел сначала замени значения плотными рангами в порядке возрастания; затем найди все уникальные пары значений с суммой ноль, не используя элемент дважды. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const sorted = [...new Set(items)].sort((a, b) => a - b);
  const rank = new Map(sorted.map((x, i) => [x, i]));
  return items.map(x => rank.get(x));
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[3,0,3,1,2],"answer":[]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[0,0,1,1],"answer":[[0,0]]}
