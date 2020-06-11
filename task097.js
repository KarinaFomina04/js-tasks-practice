/* 📌 Задача 097. Для массива целых чисел сначала оставь значения, встречающиеся ровно один раз; затем найди элемент строгого большинства, иначе верни null. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const counts = new Map();
  for (const x of items) counts.set(x, (counts.get(x) ?? 0) + 1);
  return items.filter(x => counts.get(x) === 1);
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[-1,0,2],"answer":null}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":null}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[],"answer":null}
