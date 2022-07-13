import * as t from "io-ts";
import * as E from "fp-ts/Either";
import nullable from "./index";
import {describe, it, expect} from 'vitest';

describe("nullable", () => {
    it("should create a decoder which can handle the specified type and null", () => {
        const FooCodec = t.type({
            foo: t.string,
        });

        const NullableFooCodec = nullable(FooCodec);

        expect(E.isRight(NullableFooCodec.decode({ foo: "hello" }))).toBe(true);
        expect(E.isRight(NullableFooCodec.decode(null))).toBe(true);
    });
});