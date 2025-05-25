const exampleSum = require('./problem1_example');

describe('exampleSum 함수 테스트', () => {
	// 테스트 케이스 1: 기본적인 덧셈
	test('1 + 2는 3이어야 합니다.', () => {
		expect(exampleSum(1, 2)).toBe(3);
	});

	// 테스트 케이스 2: 음수를 포함한 덧셈
	test('-5 + 10은 5여야 합니다.', () => {
		expect(exampleSum(-5, 10)).toBe(5);
	});

	// 테스트 케이스 3: 0을 포함한 덧셈
	test('0 + 0은 0이어야 합니다.', () => {
		expect(exampleSum(0, 0)).toBe(0);
	});

	// (선택) 일부러 실패하는 테스트 케이스도 만들어 볼 수 있습니다.
	test('잘못된 테스트: 3 + 3은 7이어야 합니다. (실패 예상)', () => {
		expect(exampleSum(3, 3)).toBe(7);
	});
});
