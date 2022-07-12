import * as t from "io-ts";

const nullable = <T extends t.Any>(type: T): t.UnionC<[t.NullC, T]> =>
    t.union([t.null, type]);

export default nullable;
