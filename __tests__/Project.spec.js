import { Project } from "../src/Project";

describe("Project Class", () =>{
    test("can push multiple contents", () => {
        let p = new Project();
        p.pushContents("aa", "bb", "cc");
        expect(p.ContentCount).toBe(3);
    });
});