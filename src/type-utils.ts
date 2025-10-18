// Utility types for compile-time type tests

// Equal<A, B> resolves to true if A and B are identical types, otherwise false.
// Implementation uses conditional types and function overload inference trick.
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

// Expect<T> enforces that T is true. If T is false (or not true), TypeScript will produce an error.
// Use as: type _ = Expect<Equal<TypeA, TypeB>>;
export type Expect<T extends true> = T;

// Examples (uncomment to see TypeScript errors when types don't match):
// type A = { a: number };
// type B = { a: number };
// type C = { a: string };
//
// // should be fine
// type test1 = Expect<Equal<A, B>>;
//
// // should error
// type test2 = Expect<Equal<A, C>>;
