/* 📌 Задача 046. Для массива целых чисел сначала построй суммы полных скользящих окон длины три; затем найди ближайшее строго большее значение справа от каждого элемента, при отсутствии верни null. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const result = [];
  for (let i = 2; i < items.length; i++) result.push(items[i - 2] + items[i - 1] + items[i]);
  return result;
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[5,2,5],"answer":[null,5,null]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[4,5],"answer":[5,null]}
