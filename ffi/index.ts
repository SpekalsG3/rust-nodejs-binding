import * as ffi from 'ffi-napi';
import { types, refType } from 'ref-napi';
import * as path from 'path';
import * as process from 'process';
import * as StructType from "ref-struct-napi";

const libFile = path.join(
  process.cwd(),
  './binding/target/release/libbinding.dylib',
);

export const IDataStruct = StructType({
  value: types.uint32,
});

export const { add, set } = ffi.Library(libFile, {
  add: [types.uint32, [types.uint32, types.uint32]],
  set: ['void', [refType(IDataStruct), types.uint32]],
});

console.log('loaded');

console.log('5 + 10 =', add(5, 10));

const data = new IDataStruct();
data.value = 5;
console.log('data.value =', data.value);

const x = set(data.ref(), 10);
console.log('set result:', x);
console.log('data.value =', data.value);

