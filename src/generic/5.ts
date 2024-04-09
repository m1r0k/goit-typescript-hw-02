/*+++
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<TKey, TValue> {
  key: TKey;
  value: TValue;
}

const pair1: KeyValuePair<string, string> = { key: "name", value: "Alice" };
console.log(pair1.key); // 'name'
console.log(pair1.value); // 'Alice'

const pair2: KeyValuePair<number, boolean> = { key: 1, value: true };
console.log(pair2.key); // 1
console.log(pair2.value); // true

export {};
