
type Get<
    Obj extends Record<PropertyKey, unknown>, 
    Key extends string
> = Key extends keyof Obj ? Obj[Key] : never

//  ---- Test Cases ----
import type { Equal, Expect } from "./type-utils"

type cases = [
    Expect<Equal<Get<Data, "foo.bar.value">, "foobar">>,
    Expect<Equal<Get<Data, "foo.bar.count">, 6>>,
    Expect<Equal<Get<Data, "foo.include">, true>>,
    Expect<Equal<Get<Data, "foo.baz">, false>>,
    Expect<Equal<Get<Data, "hello">, "world">>,
    Expect<Equal<Get<Data, "no.existent">, never>>
]

type Data = {
    foo: {
        bar: {
            value: "foobar",
            count: 6
        }
        include: true
    }
    "foo.baz": false,
    hello: "world"
}