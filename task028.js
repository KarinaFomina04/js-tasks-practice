/* 📌 Задача 028. Для массива целых чисел сначала замени каждый элемент максимумом его префикса; затем найди длину самого длинного отрезка без повторов. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  let maximum = -Infinity;
  return items.map(x => maximum = Math.max(maximum, x));
}

function analyze(a) {
  const last = new Map(); let start = 0, best = 0;
  a.forEach((x, i) => { start = Math.max(start, (last.get(x) ?? -1) + 1); last.set(x, i); best = Math.max(best, i - start + 1); });
  return best;
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[3,3,3,3,3],"answer":1}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":0}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[1,1,2,2],"answer":2}
