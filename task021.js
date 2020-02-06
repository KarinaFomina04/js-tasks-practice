/* 📌 Задача 021. Для массива целых чисел сначала оставь только первые появления значений; затем найди длину самого длинного отрезка без повторов. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  return [...new Set(items)];
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[3,-1,0,2],"answer":4}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":0}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[1,2],"answer":2}
