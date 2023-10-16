import { it, describe, expect } from 'vitest';

import type { CustomeRhyme } from './helper';
import { removeVietnameseTones, getCustomRhymes, removeFirstCharacter, getWordRhymCharacter, checkRhryme } from './helper';
import { FirstCharacters } from './constant';

type TestSuit = {
  description: string
}

type RemoveVietnameseTonesTestSuit = TestSuit & {
  word: string,
  result: string
}

const removeVietnameseTonesDataProvider: RemoveVietnameseTonesTestSuit[] = [
  {
    description: 'should tone on a',
    word: 'àáạả',
    result: 'aaaa'
  },
  {
    description: 'should tone on â',
    word: 'ầấậẩẫ',
    result: 'âââââ'
  },
  {
    description: 'should tone on ă',
    word: 'ằắặẳẵ',
    result: 'ăăăăă'
  },
  {
    description: 'should tone on e',
    word: 'èéẹẻẽ',
    result: 'eeeee'
  },
  {
    description: 'should tone on ê',
    word: 'ềếệểễ',
    result: 'êêêêê'
  },
  {
    description: 'should tone on ê',
    word: 'ềếệểễ',
    result: 'êêêêê'
  },
  {
    description: 'should tone on i',
    word: 'ìíịỉĩ',
    result: 'iiiii'
  },
  {
    description: 'should tone on o',
    word: 'òóọỏõ',
    result: 'ooooo'
  },
  {
    description: 'should tone on ô',
    word: 'ồốộổỗ',
    result: 'ôôôôô'
  },
  {
    description: 'should tone on ơ',
    word: 'ờớợởỡ',
    result: 'ơơơơơ'
  },
  {
    description: 'should tone on u',
    word: 'ùúụủũ',
    result: 'uuuuu'
  },
  {
    description: 'should tone on ư',
    word: 'ừứựửữ',
    result: 'ưưưưư'
  },
  {
    description: 'should tone on y',
    word: 'ỳýỵỷỹ',
    result: 'yyyyy'
  },
];

describe.each(removeVietnameseTonesDataProvider)('Test removeVietnameseTones', ({ description, word, result }) => {
  it(description, () => {
    expect(removeVietnameseTones(word)).toBe(result);
  })
});

type GetCustomRhymesTestSuit = TestSuit & {
  word: string,
  customRhyme: CustomeRhyme,
  result: string | null
}

const getCustomRhymesDataProvider: GetCustomRhymesTestSuit[] = [
  {
    description: 'return null if dont have custom rhyme',
    word: 'some',
    customRhyme: {},
    result: null
  },
  {
    description: 'return null if dont have any custom rhyme match with this word',
    word: 'hey',
    customRhyme: {
      'ai': ['bye']
    },
    result: null
  },
  {
    description: 'return null ai if the custom rhyme have bye as ai',
    word: 'bye',
    customRhyme: {
      'ai': ['bye']
    },
    result: 'ai'
  }
];

describe.each(getCustomRhymesDataProvider)('Test getCustomRhymes', ({ description, word, customRhyme, result }) => {
  it(description, () => {
    expect(getCustomRhymes(word, customRhyme)).toBe(result);
  })
});

describe('Test remove first character', () => {
  it('should handle the "gi" word', () => {
    expect(removeFirstCharacter('gi', {})).toBe('i');
  });

  it('should handle custom rhymes', () => {
    expect(removeFirstCharacter('bye', {
      'ai': ['bye']
    })).toBe('ai');
  });

  it('should remove the basic first characters', () => {
    FirstCharacters.forEach(character => {
      expect(removeFirstCharacter(character + 'test')).toBe('test');
    })
  })
});


describe('Test getWordRhymCharacter', () => {
  it('should get the last character without Vietnamese tones', () => {
    expect(getWordRhymCharacter('quá')).toBe('a');
  })
});

type CheckRhrymeTestSuit = TestSuit & {
  a: string,
  b: string,
  customRhyme: CustomeRhyme,
  result: boolean
}

const checkRhrymeDataProvider: CheckRhrymeTestSuit[] = [
  {
    description: 'should return true if a the same with b',
    a: 'giỏi',
    b: 'giỏi',
    customRhyme: {},
    result: true
  },
  {
    description: 'should return false if a rhyme is not like b',
    a: 'giỏi',
    b: 'quá',
    customRhyme: {},
    result: false
  },
  {
    description: 'should return true if a rhyme is like b',
    a: 'là',
    b: 'quá',
    customRhyme: {},
    result: true
  },
  {
    description: 'should return true if a rhyme is like b in the case have other last character',
    a: 'phai',
    b: 'oai',
    customRhyme: {},
    result: true
  },
  {
    description: 'should return true if a rhyme is like b with custom rhymes',
    a: 'oai',
    b: 'bye',
    customRhyme: {
      'ai': ['bye']
    },
    result: true
  }
];

describe.each(checkRhrymeDataProvider)('Test checkRhryme', ({ description, a, b, customRhyme, result }) => {
  it(description, () => {
    expect(checkRhryme(a, b, customRhyme)).toBe(result);
  });
})
