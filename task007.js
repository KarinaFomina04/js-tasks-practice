/* 📌 Задача 007. Для массива целых чисел сначала оставь значения, встречающиеся ровно один раз; затем найди максимальную сумму непустого непрерывного подмассива, для пустого верни null. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const counts = new Map();
  for (const x of items) counts.set(x, (counts.get(x) ?? 0) + 1);
  return items.filter(x => counts.get(x) === 1);
}

function analyze(a) {
  if (!a.length) return null;
  let best = a[0], current = a[0];
  for (let i = 1; i < a.length; i++) { current = Math.max(a[i], current + a[i]); best = Math.max(best, current); }
  return best;
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[-1,0,2],"answer":2}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":null}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[],"answer":null}
