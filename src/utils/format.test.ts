import { describe, it, expect } from 'vitest';

import { parseLyrics } from './helper';


describe('Test parseLyrics', () => {
  it('Should return the right content', () => {
    expect(parseLyrics('This is the first line\nThis is the second line')).toEqual([
      ['This', 'is', 'the', 'first', 'line'],
      ['This', 'is', 'the', 'second', 'line'],
    ]);
  })
});
