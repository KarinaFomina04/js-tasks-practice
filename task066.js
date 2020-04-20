/* 📌 Задача 066. Для массива целых чисел сначала построй суммы полных скользящих окон длины три; затем найди все уникальные пары значений с суммой ноль, не используя элемент дважды. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const result = [];
  for (let i = 2; i < items.length; i++) result.push(items[i - 2] + items[i - 1] + items[i]);
  return result;
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[5,2,5],"answer":[]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[4,5],"answer":[]}
