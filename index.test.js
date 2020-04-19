import {
  multiply,
  makeRandomNumber,
  MIN,
  MAX,
  ERROR_PARAMS,
  ERROR_SIZE_PARAMS,
  ERROR_TYPE_PARAMS,
} from "./index";

const numberRandomTest = 5;

describe("Random number", () => {
  for (let i = 0; i < numberRandomTest; i++) {
    let numberRandom = makeRandomNumber();
    test(`${numberRandom} is between ${MIN} and ${MAX}`, () => {
      expect(numberRandom).toBeGreaterThanOrEqual(MIN);
      expect(numberRandom).toBeLessThanOrEqual(MAX);
    });
  }
});

describe("Tests function multiply", () => {
  test("No params in function", () => {
    let errorReturnByFunction;
    try {
      multiply();
    } catch (e) {
      errorReturnByFunction = e;
    }
    expect(errorReturnByFunction).toBe(ERROR_PARAMS);
  });
  test("One params in function", () => {
    let errorReturnByFunction;
    try {
      multiply(10);
    } catch (e) {
      errorReturnByFunction = e;
    }
    expect(errorReturnByFunction).toBe(ERROR_PARAMS);
  });
  test("Params one is not a number", () => {
    let errorReturnByFunction;
    try {
      multiply("five", 5);
    } catch (e) {
      errorReturnByFunction = e;
    }
    expect(errorReturnByFunction).toBe(ERROR_TYPE_PARAMS);
  });
  test("Params two is not a number", () => {
    let errorReturnByFunction;
    try {
      multiply(5, "5");
    } catch (e) {
      errorReturnByFunction = e;
    }
    expect(errorReturnByFunction).toBe(ERROR_TYPE_PARAMS);
  });
  test("Params is number not less 0", () => {
    let errorReturnByFunction;
    try {
      multiply(4, -5);
    } catch (e) {
      errorReturnByFunction = e;
    }
    expect(errorReturnByFunction).toBe(ERROR_SIZE_PARAMS);
  });

  test("Params is number not greater 9", () => {
    let errorReturnByFunction;
    try {
      multiply(40, 1);
    } catch (e) {
      errorReturnByFunction = e;
    }
    expect(errorReturnByFunction).toBe(ERROR_SIZE_PARAMS);
  });
  test(`Return multiply result ${5 * 5}`, () => {
    expect(5 * 5).toBe(multiply(5, 5));
  });
  test("Tests with 0", () => {
    expect(5 * 0).toBe(multiply(5, 0));
  });
  for (let i = 0; i < numberRandomTest; i++) {
    const nb1 = makeRandomNumber();
    const nb2 = makeRandomNumber();

    test(`Test random number ${nb1} * ${nb2} = ${nb1 * nb2}`, () => {
      expect(nb1 * nb2).toBe(multiply(nb1, nb2));
    });
  }
});
