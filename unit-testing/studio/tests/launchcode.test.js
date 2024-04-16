// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test('should return "nonprofit" for the value of organization', function() {
    expect(launchcode.organization).toEqual('nonprofit')
  })
  test('should return "Jeff" for the value of executiveDirector', function() {
    expect(launchcode.executiveDirector).toEqual('Jeff')
  })
  test('should return "100%" for the value of percentageCoolEmployees', function() {
    expect(launchcode.percentageCoolEmployees).toEqual('100%')
  })
  test('should return the values of programsOffered and check that the array length is 3', function() {
    expect(launchcode.programsOffered).toContain('Full-time Web Dev');
    expect(launchcode.programsOffered).toContain('Part-time Web Dev');
    expect(launchcode.programsOffered).toContain("Women's+");
    expect(launchcode.programsOffered.length).toEqual(3)
  })
  test('should return "Launch!" when passed a number that ONLY divisible by 2', function() {
    expect(launchcode.launchOutput(2)).toEqual('Launch!');
  })
  test('should return "Code!" when passed a number that is ONLY divisible by 3', function() {
    expect(launchcode.launchOutput(3)).toEqual('Code!');
  })
  test('should return "Rocks!" when passed a number that is ONLY divisible by 5', function() {
    expect(launchcode.launchOutput(5)).toEqual('Rocks!');
  })
  test('should return "LaunchCode!" when passed a number that is divisible by 2 AND 3', function() {
    expect(launchcode.launchOutput(6)).toEqual('LaunchCode!')
  })
  test('should return "Code Rocks!" when passed a number that is divisible by 3 AND 5', function() {
    expect(launchcode.launchOutput(15)).toEqual('Code Rocks!')
  })
  test('should return "Launch Rocks!" when passed a number that is divisible by 2 AND 5', function() {
    expect(launchcode.launchOutput(10)).toEqual('Launch Rocks! (CRASH!!!!)')
  })
  test('should return "LaunchCode Rocks!" when passed a number that is divisible by 2, 3 AND 5', function() {
    expect(launchcode.launchOutput(30)).toEqual('LaunchCode Rocks!')
  })
  test(`should return "Rutabagas! That doesn't work." when passed a number that is divisible by 2 AND 5`, function() {
    expect(launchcode.launchOutput(7)).toEqual("Rutabagas! That doesn't work.")
  })
  // Write your unit tests here!
  
});