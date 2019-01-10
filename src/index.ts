class Main {
  public foo: string;
  constructor() {
    this.foo = "bar";
  }
  returnsTrue(): boolean {
    return true;
  }
  returnsPromise(): Promise<Boolean> {
    return new Promise<Boolean>((resolve: any) => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });
  }
  add(a: number, b: number): number {
    return +(a + b).toFixed(1);
  }
}
const main = new Main();
export default main;
