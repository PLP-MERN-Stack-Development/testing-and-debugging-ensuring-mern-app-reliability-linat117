const { validateBug } = require('../../src/utils/validation');

describe('validateBug', () => {
  test('rejects missing title', () => {
    const result = validateBug({});
    expect(result.error).toMatch(/Title is required/);
  });

  test('accepts valid bug', () => {
    const result = validateBug({ title: 'Fix header' });
    expect(result.error).toBeNull();
  });

  test('rejects invalid status', () => {
    const result = validateBug({ title: 'x', status: 'bad' });
    expect(result.error).toMatch(/Invalid status/);
  });
});
