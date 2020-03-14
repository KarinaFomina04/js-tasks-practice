/* 📌 Задача 044. Для массива целых чисел сначала замени каждую серию равных соседей её длиной; затем найди ближайшее строго большее значение справа от каждого элемента, при отсутствии верни null. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

function prepare(items) {
  const runs = [];
  for (let i = 0; i < items.length;) {
    let end = i + 1;
    while (end < items.length && items[end] === items[i]) end++;
    runs.push(end - i); i = end;
  }
  return runs;
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

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[1,1,1,1,1],"answer":[null,null,null,null,null]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[2,2],"answer":[null,null]}
