/* 📌 Задача 085. Для массива целых чисел сначала замени значения плотными рангами в порядке возрастания; затем найди минимальное отсутствующее положительное целое. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const sorted = [...new Set(items)].sort((a, b) => a - b);
  const rank = new Map(sorted.map((x, i) => [x, i]));
  return items.map(x => rank.get(x));
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[3,0,3,1,2],"answer":4}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":1}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[0,0,1,1],"answer":2}
