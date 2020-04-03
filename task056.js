/* 📌 Задача 056. Для массива целых чисел сначала построй суммы полных скользящих окон длины три; затем посчитай инверсии слиянием за O(n log n). Верни объект с подготовленным массивом и ответом; исходный массив не изменяй. Уровень: Senior. */

function prepare(items) {
  const result = [];
  for (let i = 2; i < items.length; i++) result.push(items[i - 2] + items[i - 1] + items[i]);
  return result;
}

function analyze(a) {
  function sort(values) {
    if (values.length < 2) return [values, 0];
    const middle = values.length >>> 1;
    const [left, lc] = sort(values.slice(0, middle)), [right, rc] = sort(values.slice(middle));
    const merged = []; let i = 0, j = 0, count = lc + rc;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) merged.push(left[i++]);
      else { merged.push(right[j++]); count += left.length - i; }
    }
    return [merged.concat(left.slice(i), right.slice(j)), count];
  }
  return sort(a)[1];
}

function solve(items) {
  const prepared = prepare(items);
  return { prepared, answer: analyze(prepared) };
}

console.log(JSON.stringify(solve([3, -1, 3, 0, 2]))); // Вывод 1: {"prepared":[5,2,5],"answer":1}
console.log(JSON.stringify(solve([]))); // Вывод 2: {"prepared":[],"answer":0}
console.log(JSON.stringify(solve([1, 1, 2, 2]))); // Вывод 3: {"prepared":[4,5],"answer":0}
