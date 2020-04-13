/* 📌 Задача 062. Для массива целых чисел сначала замени значения накопленными суммами; затем найди все уникальные пары значений с суммой ноль, не используя элемент дважды. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  let total = 0; return items.map(x => total += x);
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[3,2,5,5,7],"answer":[]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[1,2,4,6],"answer":[]}
