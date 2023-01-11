import Model from "../src/Model";

describe("Project Class", () =>{
    test("can add project", () => {
        let m = new Model();
        m.addProject("a", "project1");
        expect(m.ProjectCount).toBe(1);
    });
});