/* 📌 Задача 090. Для массива целых чисел сначала построй расстояния между последовательными появлениями одинаковых значений; затем найди минимальное отсутствующее положительное целое. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const last = new Map(); const result = [];
  items.forEach((x, i) => {
    if (last.has(x)) result.push(i - last.get(x));
    last.set(x, i);
  });
  return result;
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[2],"answer":1}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":1}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[1,1],"answer":2}
