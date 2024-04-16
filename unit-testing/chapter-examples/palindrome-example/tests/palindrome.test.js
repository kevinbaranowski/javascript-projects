const isPalindrome = require('../palindrome.js')

describe("testing isPalindrome", function() {
    test('should return true for a single letter', function() {
        expect(isPalindrome('a')).toBe(true)
    })
    test("should return true for a single letter repeated", function() {
        expect(isPalindrome('aaa')).toBe(true)
    })
    test('should return true for a simple palindrome', function() {
        expect(isPalindrome('aba')).toBe(true)
    })
    test('should return true for a longer palindrome', function() {
        expect(isPalindrome('racecar')).toBe(true)
    })
    test('should return false for a short non palindrome', function() {
        expect(isPalindrome('ab')).toBe(false)
    })
    test('should return false for a longer non palindrome', function() {
        expect(isPalindrome('launchcode')).toBe(false)
    })
    test('should return false for a palindrome where a different letter casing is used', function() {
        expect(isPalindrome('abA')).toBe(false)
    })
    test('should return false when spacing is used', function() {
        expect(isPalindrome('so many dynamos')).toBe(false)
    })
    test('should consider an empty string a palindrome', function() {
        expect(isPalindrome('')).toBe(true)
    })
    test('should consider a string containing only spaces a palindrome', function() {
        expect(isPalindrome(' ')).toBe(true)
    })
})