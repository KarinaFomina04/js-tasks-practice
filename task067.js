/* 📌 Задача 067. Для массива целых чисел сначала оставь значения, встречающиеся ровно один раз; затем найди все уникальные пары значений с суммой ноль, не используя элемент дважды. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const counts = new Map();
  for (const x of items) counts.set(x, (counts.get(x) ?? 0) + 1);
  return items.filter(x => counts.get(x) === 1);
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[-1,0,2],"answer":[]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[],"answer":[]}
