import calculateBmi from "../../services/bmi-service";

test('divides 56 with 1.68 * 1.68', () => {
    expect(calculateBmi(56, 1.68)).toBe(19.84);
  });