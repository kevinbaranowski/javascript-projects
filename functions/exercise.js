function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line = line + '#'
    }
    return line
}

console.log(makeLine(8));

function makeSquare(size) {
    let square = '';
    for (i = 0; i < size; i++) {
        let row = makeLine(size);
        square += row + '\n'
    }
    return square
}

console.log(makeSquare(5));

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
       let row = makeLine(width)
       rectangle += row + '\n'
    }
    return rectangle
}

console.log(makeRectangle(4, 6))

function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 1; i < height + 1; i++) {
        let row = makeLine(i);
        stairs += row + '\n'
    }
    return stairs
}

console.log(makeDownwardStairs(7))

function makeSpaceLines(numSpaces, numChars) {
    let spaceLine = '';
    let spaces = '';
    let chars = makeLine(numChars);
    for (let i = 0; i < numSpaces; i++) {
        spaces += ' '
    }
    spaceLine = spaces + chars + spaces;
    return spaceLine
}

console.log(makeSpaceLines(3, 5))

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        let row = makeSpaceLines(height - i - 1, 2 * i + 1)
        triangle = triangle + row + '\n'
    }
    return triangle.slice(0, -1)
}

console.log(makeIsoscelesTriangle(5))

function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

function makeDiamond(height) {
    let diamond = '';
    let topOfDiamond = makeIsoscelesTriangle(height/2);
    let bottomOfDiamond = reverse(topOfDiamond);
    diamond = topOfDiamond + '\n' + bottomOfDiamond;
    return diamond
}

console.log(makeDiamond(9));