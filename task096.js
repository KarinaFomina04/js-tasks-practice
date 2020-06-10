/* 📌 Задача 096. Для массива целых чисел сначала построй суммы полных скользящих окон длины три; затем найди элемент строгого большинства, иначе верни null. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const result = [];
  for (let i = 2; i < items.length; i++) result.push(items[i - 2] + items[i - 1] + items[i]);
  return result;
}

function analyze(a) {
  let candidate, balance = 0;
  for (const x of a) { if (balance === 0) candidate = x; balance += x === candidate ? 1 : -1; }
  return a.filter(x => x === candidate).length > a.length / 2 ? candidate : null;
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[5,2,5],"answer":5}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":null}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[4,5],"answer":null}
