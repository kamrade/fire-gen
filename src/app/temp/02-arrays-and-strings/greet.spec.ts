import { greet } from './greet';

describe('greet', () => {
  it('should include the name in the output message', () => {
    expect(greet('Dennis')).toContain('Dennis');
  })
});
