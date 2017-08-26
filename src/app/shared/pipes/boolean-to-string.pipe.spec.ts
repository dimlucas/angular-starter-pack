import {BooleanToStringPipe} from "./boolean-to-string.pipe";

describe("Boolean to string pipe", () => {
    const truthyText: string = "YES";
    const falsyText: string = "NO";
    let pipe: BooleanToStringPipe;

    beforeEach(() => {
        pipe = new BooleanToStringPipe();
    });

    it("should return the first text value when true", () => {
        let result = pipe.transform(true, truthyText, falsyText);
        expect(result).toBeDefined();
        expect(result).toEqual(truthyText);
    });

    it("should return the second text value when false", () => {
        let result = pipe.transform(false, truthyText, falsyText);
        expect(result).toBeDefined();
        expect(result).toEqual(falsyText);
    });
});