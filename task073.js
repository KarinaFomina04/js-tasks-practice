/* 📌 Задача 073. Для массива целых чисел сначала построй разности соседних значений; затем верни произведение остальных элементов для каждой позиции без деления. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  return items.slice(1).map((x, i) => x - items[i]);
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[-4,4,-3,2],"answer":[-24,24,-32,48]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[0,1,0],"answer":[0,0,0]}
