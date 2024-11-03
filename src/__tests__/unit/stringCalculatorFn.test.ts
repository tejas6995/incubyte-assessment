import add from '@/string-calculator-Fn'

describe('String Calculator', () => {
    test('should return 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });

    test('should return the number itself for a single number', () => {
        expect(add('5')).toBe(5);
    });

    test('should return the sum of two numbers', () => {
        expect(add('2,6')).toBe(8);
    });

    test('should return the sum of multiple numbers', () => {
        expect(add('1,2,3')).toBe(6);
        expect(add('1\n2,3')).toBe(6);
        expect(add('1\n2\n3')).toBe(6);
        expect(add('1,2\n3')).toBe(6);
        expect(add('1,    6\n2\n3')).toBe(12);
    });

    test('should handle custom delimiters', () => {
        expect(add('//;\n1;2')).toBe(3);
        expect(add('//***\n1***2***3')).toBe(6);
    });

    test('should throw an error for negative numbers', () => {
        expect(() => add('1,-2,3')).toThrow('Negative numbers are not allowed -2');
        expect(() => add('//;\n1;-2;3;-4')).toThrow('Negative numbers are not allowed -2, -4');
    });
});