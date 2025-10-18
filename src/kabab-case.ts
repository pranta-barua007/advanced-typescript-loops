// Task 

// Replace camelCase or PascalCase string with kebab-case

// `FooBarBaz` -> `foo-bar-baz`


type KebabCase<S extends string> = S extends `${infer A}${infer Rest}` ? (
    Rest extends Uncapitalize<Rest>
    ? `${Lowercase<A>}${KebabCase<Rest>}`
    : `${Lowercase<A>}-${KebabCase<Uncapitalize<Rest>>}`
) : S

type Text = KebabCase<"FooBarBaz">

import type { Equal, Expect } from "./type-utils"

type cases = [
    Expect<Equal<KebabCase<"FooBarBaz">, "foo-bar-baz">>,
    Expect<Equal<KebabCase<"fooBarBaz">, "foo-bar-baz">>,
    Expect<Equal<KebabCase<"fooBARBaz">, "foo-b-a-r-baz">>,
    Expect<Equal<KebabCase<"foo_bar">, "foo_bar">>,
    Expect<Equal<KebabCase<"ABC">, "a-b-c">>,
    Expect<Equal<KebabCase<"-">, "-">>,
    Expect<Equal<KebabCase<"">, "">>,
    Expect<Equal<KebabCase<"😎">, "😎">>
]