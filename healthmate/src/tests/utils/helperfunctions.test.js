import calculateBmi from "../../services/bmi-service";
import estimateFluid from "../../services/fluidService";

test('divides 56 with 1.68 * 1.68', () => {
    expect(calculateBmi(56, 1.68)).toBe(19.84);
  });

test('multiply 60 and 35', () => {
    expect(estimateFluid(60, 35)).toBe(2100);
});  