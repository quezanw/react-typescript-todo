import * as utils from './utils';
import { string } from 'prop-types';

it('should generate a string of random letters and numbers', () => {
  expect(utils.generateString()).toHaveLength(10);
  expect(typeof utils.generateString() === 'string').toEqual(true)
});