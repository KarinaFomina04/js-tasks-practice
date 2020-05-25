/* 📌 Задача 087. Для массива целых чисел сначала оставь значения, встречающиеся ровно один раз; затем найди минимальное отсутствующее положительное целое. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const counts = new Map();
  for (const x of items) counts.set(x, (counts.get(x) ?? 0) + 1);
  return items.filter(x => counts.get(x) === 1);
}

function analyze(a) {
  const copy = [...a];
  for (let i = 0; i < copy.length; i++) {
    while (copy[i] > 0 && copy[i] <= copy.length && copy[copy[i] - 1] !== copy[i]) {
      const target = copy[i] - 1; [copy[i], copy[target]] = [copy[target], copy[i]];
    }
  }
  for (let i = 0; i < copy.length; i++) if (copy[i] !== i + 1) return i + 1;
  return copy.length + 1;
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[-1,0,2],"answer":1}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":1}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[],"answer":1}
