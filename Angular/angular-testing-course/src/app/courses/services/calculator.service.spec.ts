import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe("CalculatorService", () => {
  it("should add tow number", () => {
    const calculation = new CalculatorService(new LoggerService());
    const result = calculation.add(2, 2);
    expect(result).toBe(4);
  });
  it("should subtract two number", () => {
    const calculation = new CalculatorService(new LoggerService());
    const result = calculation.subtract(4, 2);
    expect(result).toBe(2, "unexpected result");
  });
});
