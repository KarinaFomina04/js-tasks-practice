/* 📌 Задача 122. Для массива целых чисел сначала замени значения накопленными суммами; затем найди максимальную сумму несоседних элементов, разрешая пустой выбор. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  let total = 0; return items.map(x => total += x);
}

function analyze(a) {
  let skip = 0, take = -Infinity;
  for (const x of a) [skip, take] = [Math.max(skip, take), skip + x];
  return Math.max(skip, take);
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[3,2,5,5,7],"answer":15}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":0}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[1,2,4,6],"answer":8}
