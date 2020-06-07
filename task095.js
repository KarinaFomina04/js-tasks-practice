/* 📌 Задача 095. Для массива целых чисел сначала замени значения плотными рангами в порядке возрастания; затем найди элемент строгого большинства, иначе верни null. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const sorted = [...new Set(items)].sort((a, b) => a - b);
  const rank = new Map(sorted.map((x, i) => [x, i]));
  return items.map(x => rank.get(x));
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[3,0,3,1,2],"answer":null}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":null}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[0,0,1,1],"answer":null}
