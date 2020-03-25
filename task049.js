/* 📌 Задача 049. Для массива целых чисел сначала вычти из каждого элемента медиану исходного массива, для чётной длины возьми нижнюю медиану; затем найди ближайшее строго большее значение справа от каждого элемента, при отсутствии верни null. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  if (!items.length) return [];
  const sorted = [...items].sort((a, b) => a - b);
  const median = sorted[Math.floor((sorted.length - 1) / 2)];
  return items.map(x => x - median);
}

function analyze(a) {
  const result = Array(a.length).fill(null), stack = [];
  for (let i = 0; i < a.length; i++) { while (stack.length && a[stack.at(-1)] < a[i]) result[stack.pop()] = a[i]; stack.push(i); }
  return result;
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[1,-3,1,-2,0],"answer":[null,1,null,0,null]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[0,0,1,1],"answer":[1,1,null,null]}
