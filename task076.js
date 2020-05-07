/* 📌 Задача 076. Для массива целых чисел сначала построй суммы полных скользящих окон длины три; затем верни произведение остальных элементов для каждой позиции без деления. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const result = [];
  for (let i = 2; i < items.length; i++) result.push(items[i - 2] + items[i - 1] + items[i]);
  return result;
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[5,2,5],"answer":[10,25,10]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[4,5],"answer":[5,4]}
