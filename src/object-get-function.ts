
type Get<
    Obj, 
    Key extends string
> = Key extends keyof Obj 
    ? Obj[Key]
    : Key extends `${infer K1}.${infer Rest}`
        ? K1 extends keyof Obj
            ? Get<Obj[K1], Rest>
            : never 
        : never

//  ---- Test Cases ----
import type { Equal, Expect } from "./type-utils"

type cases = [
    Expect<Equal<Get<Data, "foo.bar.value">, "foobar">>,
    Expect<Equal<Get<Data, "foo.bar.count">, 6>>,
    Expect<Equal<Get<Data, "foo.include">, true>>,
    Expect<Equal<Get<Data, "foo.baz">, false>>,
    Expect<Equal<Get<Data, "hello">, "world">>,
    Expect<Equal<Get<Data, "no.existent">, never>>,
    Expect<Equal<Get<DeeplyNested, "a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.value">, 42>>,
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

type DeeplyNested = {
    a: {
        b: {
            c: {
                d: {
                    e: {
                        f: {
                            g: {
                                h: {
                                    i: {
                                        j: {
                                            k: {
                                                l: {
                                                    m: {
                                                        n: {
                                                            o: {
                                                                p: {
                                                                    q: {
                                                                        r: {
                                                                            s: {
                                                                                t: {
                                                                                    value: 42
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}