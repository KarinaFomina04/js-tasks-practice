/* 📌 Задача 003. Для массива целых чисел сначала построй разности соседних значений; затем найди максимальную сумму непустого непрерывного подмассива, для пустого верни null. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  return items.slice(1).map((x, i) => x - items[i]);
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[-4,4,-3,2],"answer":4}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":null}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[0,1,0],"answer":1}
