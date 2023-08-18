const {
  add,
  set,
  IData,
}: {
  add: (a: number, b: number) => number;
  set: (data: typeof IData, value: number) => void;
  IData: any;
} =
// eslint-disable-next-line @typescript-eslint/no-var-requires
  require('./binding_lib/pairs_gen.node');

console.log('loaded');

console.log('5 + 10 =', add(5, 10));

const data = new IData(6);
console.log('data.value =', data.value);
data.value = 4;
console.log('data.value =', data.value);

const x = set(data, 10);
console.log('set result:', x);
console.log('data.value =', data.value);
