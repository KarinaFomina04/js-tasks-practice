/* 📌 Задача 078. Для массива целых чисел сначала замени каждый элемент максимумом его префикса; затем верни произведение остальных элементов для каждой позиции без деления. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  let maximum = -Infinity;
  return items.map(x => maximum = Math.max(maximum, x));
}

function analyze(a) {
  const result = Array(a.length).fill(1); let product = 1;
  for (let i = 0; i < a.length; i++) { result[i] = product; product *= a[i]; }
  product = 1;
  for (let i = a.length - 1; i >= 0; i--) { result[i] *= product; product *= a[i]; }
  return result;
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[3,3,3,3,3],"answer":[81,81,81,81,81]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[1,1,2,2],"answer":[4,4,2,2]}
