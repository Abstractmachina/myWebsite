describe("Project Class", () =>{
    test("can push content", () => {
        let p = new Project();
        p.pushContent("aa");
        p.pushContent("bb");
        p.pushContent("cc");
        expect(p.ContentCount).toBe(3);
    });
});