const teamObj = require('./team.js');

test('returns object with correct structure', () => {
  // arrange
  const testName = 'Unikron';
  const testLevel = 5;
  // act
  const result = teamObj(testName, testLevel);
  //assert
  expect(result).toEqual({'teamName': testName, 'level': testLevel, 'points': 0})
});
