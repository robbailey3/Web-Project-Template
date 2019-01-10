import main from "./index";
describe("it should do testing", () => {
  it("should be initiated", () => {
    expect(main).toBeDefined();
  });
  it("should return true", () => {
    expect(main.returnsTrue()).toBeTruthy();
  });
  let prom: boolean;
  beforeEach(done => {
    main.returnsPromise().then((res: boolean) => {
      prom = res;
      done();
    });
  });
  it("should return true after a bit", done => {
    expect(prom).toBe(true);
    done();
  });
  it("should add two numbers together", () => {
    expect(main.add(1, 2)).toEqual(3);
    expect(main.add(0.1, 0.2)).toEqual(0.3);
    expect(main.add(1, 0.2)).toEqual(1.2);
    expect(main.add(Infinity, 0)).toEqual(Infinity);
    expect(main.add(0, 0)).toEqual(0);
    expect(main.add(9007199254740991, 9007199254740991)).toEqual(
      18014398509481982
    );
  });
});
