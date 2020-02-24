/* 📌 Задача 032. Для массива целых чисел сначала замени значения накопленными суммами; затем посчитай непрерывные подмассивы с нулевой суммой. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  let total = 0; return items.map(x => total += x);
}

function analyze(a) {
  const counts = new Map([[0, 1]]); let sum = 0, result = 0;
  for (const x of a) { sum += x; result += counts.get(sum) ?? 0; counts.set(sum, (counts.get(sum) ?? 0) + 1); }
  return result;
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[3,2,5,5,7],"answer":0}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":0}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[1,2,4,6],"answer":0}
