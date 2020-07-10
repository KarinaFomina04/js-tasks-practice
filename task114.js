/* 📌 Задача 114. Для массива целых чисел сначала замени каждую серию равных соседей её длиной; затем построй максимумы полных окон длины два монотонной очередью. Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Middle. */

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
  const deque = [], result = []; let head = 0;
  for (let i = 0; i < a.length; i++) {
    while (deque.length > head && deque[head] <= i - 2) head++;
    while (deque.length > head && a[deque.at(-1)] <= a[i]) deque.pop();
    deque.push(i); if (i >= 1) result.push(a[deque[head]]);
  }
  return result;
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[1,1,1,1,1],"answer":[1,1,1,1]}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":[]}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[2,2],"answer":[2]}
