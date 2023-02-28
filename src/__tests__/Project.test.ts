import Project from "../types/Project";

describe("Project Class", () =>{
    test("can push content", () => {
        let p = new Project();
        p.pushContent("aa");
        p.pushContent("bb");
        p.pushContent("cc");
        expect(p.ContentCount).toBe(3);
    });
});


describe("Project Class", () =>{
    test("can push multiple contents", () => {
        let p = new Project();
        p.pushContents("aa", "bb", "cc");
        expect(p.ContentCount).toBe(3);
    });
});
