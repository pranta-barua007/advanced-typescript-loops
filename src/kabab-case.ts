// Task 

// Replace camelCase or PascalCase string with kebab-case

// `FooBarBaz` -> `foo-bar-baz`


type KebabCase<S extends string> = S extends `${infer A}${infer Rest}`
? KebabCase<Rest> extends infer Str
    ? Str extends string 
    ? Rest extends Uncapitalize<Rest>
        ? `${Lowercase<A>}${Str}`
        : `${Lowercase<A>}-${Str}`
    : never
    : never
: S

type Text = KebabCase<"FooBarBaz">

import type { Equal, Expect } from "./type-utils"

type cases = [
    Expect<Equal<KebabCase<"FooBarBazFooBarBazFooBarBazFooBarBazFooBarBazFooBarBazFooBarBaz">, "foo-bar-baz-foo-bar-baz-foo-bar-baz-foo-bar-baz-foo-bar-baz-foo-bar-baz-foo-bar-baz">>,
    Expect<Equal<KebabCase<"FooBarBaz">, "foo-bar-baz">>,
    Expect<Equal<KebabCase<"fooBarBaz">, "foo-bar-baz">>,
    Expect<Equal<KebabCase<"fooBARBaz">, "foo-b-a-r-baz">>,
    Expect<Equal<KebabCase<"foo_bar">, "foo_bar">>,
    Expect<Equal<KebabCase<"ABC">, "a-b-c">>,
    Expect<Equal<KebabCase<"-">, "-">>,
    Expect<Equal<KebabCase<"">, "">>,
    Expect<Equal<KebabCase<"😎">, "😎">>
]