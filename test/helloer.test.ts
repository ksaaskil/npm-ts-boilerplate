import { Helloer } from "../src/helloer";

describe("Hello sayer", () => {
    let helloer: Helloer;
    beforeEach(() => {
        helloer = new Helloer();
    })
    test("correctly greets user", async () => {
        const user = "Mr. Garrison";
        const response = helloer.greet(user);
        expect(response).toEqual(`Hello ${user}!`);
    });
});
