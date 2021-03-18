# All JS important concepts
<li><a href="#hello-world">JavaScript Basics</a>
<li><a href="#data-types">Data Types and Variables</a>
<li><a href="#arithmetic-operators">Arithmetic Operators</a>
<li><a href="#functions">Functions</a>
<li><a href="#">Let and Const</a>
<li><a href="#">Conditional statements- If/Else</a>
<li><a href="#">Conditional Statements- Switch</a>
<li><a href="#">Loops</a>
<li><a href="#">Arrays</a>
<li><a href="#">Try, Catch and Finally</a>
<li><a href="#">Throw</a>
<li><a href="#">Objects</a>
<li><a href="#">Classes</a>
<li><a href="#">Inheritance</a>
<li><a href="#">Template Literals</a>
<li><a href="#">Arrow Functions</a>
<li><a href="#">Bitwise operators</a>
<li><a href="#">JavaScript Dates</a>
<li><a href="#">Regular Expressions</a>

<h1 id="hello-world">JavaScript Basics</h1>

## Lexical Structure
The lexical structure of a programming language is the set of elementary rules that tells you how to write programs in that language. It's essentially the lowest-level syntax of a language and specifies such things as what variable names look like, the delimiter characters for comments, and how one program statement is separated from the next.

## Character Set
<li>JavaScript programs are written using the Unicode character set. Unicode is a superset of ASCII and Latin-1.
<li>JavaScript is a case-sensitive language.
<li>JavaScript ignores spaces that appear between tokens in programs. For the most part, <li>JavaScript also ignores line breaks.
<li>We use the console.log method to write data to standard output in JavaScript.

## Comments
JavaScript supports two styles of comments, as demonstrated below.

### Inline Comments
Any text between a // and the end of a line is ignored by JavaScript and treated as a comment:
```js
console.log("This is an instruction that won't be ignored.");
// This is an inline comment and will be ignored
```

### Block Comments
Any text between /* and */ is also treated as a comment:
```js
console.log("This is an instruction that won't be ignored.");
/*
 * This is a block comment and will be ignored
 */
 
console.log("This is an instruction that won't be ignored.");

/*
 * This is part of our block comment and will be ignored
 * This is part of the same block comment and will be ignored
 */
```
## Literals
A literal is a data value that appears directly in a program. For example:
```js
// The integer number twelve:
12 

// The floating-point number one-point-two:
1.2 

// A string of text:
"Hello, World." 

// Another string:
'Hi!' 

// A boolean value:
true 

// The absence of an object:
null 
```

More complex expressions can serve as array and object literals.
```js
// An object initializer:
{x: 1, y: 2} 

// An array initializer:
[1, 2, 3, 4, 5] 
```
## Identifiers
An identifier is simply a name that you can specify and use as a means of referring back to a specific value or other piece of code. In JavaScript, identifiers are used to name variables and functions, as well as to provide labels for certain code loops.

A JavaScript identifier must begin with a letter, an underscore (_), or a dollar sign ($). Subsequent characters can be letters, underscores, dollar signs, or digits (i.e., the numbers  through ). Like many other languages, JavaScript doesn't allow digits as the first character of an identifier because it makes them more easily distinguishable from numbers.

```js
// Some valid identifiers are:
x
variable_name
sum13
_variable
$variable
```

A number of identifiers are reserved words or keywords, meaning they are part of a set of predefined words that have special meaning in the language itself. You cannot use these words as identifiers in your programs. For example, for and function are reserved words in JavaScript. In addition, there are a number of predefined global variables and functions; it's important to avoid using these predefined names for your own variables and functions.
## Optional Semicolon
Like many programming languages, JavaScript uses the semicolon (;) to separate statements from each other. This is important as it makes the meaning of your code clear; without a separator, the end of one statement might appear to be the beginning of the next (and vice versa). In JavaScript, you can usually omit the semicolon between two statements as long as those statements are written on separate lines.

<h1 id="data-types">Data Types</h1>
The latest ECMAScript standard defines seven data types:

<li>A primitive value or data type is data that is not an object and has no methods. All primitives are immutable, meaning they cannot be changed. There are six primitive types:
<li>Number
<li>String
<li>Boolean
<li>Symbol
<li>Null
<li>Undefined
<li>The seventh data type is Object

## Number Data Type
According to the ECMAScript standard, all numbers are double-precision 64-bit binary format IEEE 754-2008, meaning there is no specific type for integers.
### Maximum Value for a Number
The MAX_VALUE property has a value of approximately 1.7976931348623157 X 10^308 . Values larger than Number.MAX_VALUE are represented as Infinity.
### Minimum Value for a Number
The MIN_VALUE property is the smallest positive value of the Number type closest to 0, not the most negative number, that JavaScript can represent. MIN_VALUE has a value of approximately 5 X 10^-324 . Values smaller than Number.MIN_VALUE ("underflow values") are converted to 0.

## Symbolic Numbers
T<li>here are three symbolic number values:

<li>Infinity: This is any number divided by 0, or an attempt to multiply Number.MAX_VALUE by an integer .
<li>-Infinity: This is any number divided by -0 , or an attempt to multiply Number.MAX_VALUE by an integer .
<li>NaN: This stands for "Not-a-Number" and denotes an unrepresentable value.

## The isSafeInteger Method
A safe integer is an integer that:

<li>Can be exactly represented as an IEEE-754 double precision number, and
<li>Whose IEEE-754 representation cannot be the result of rounding any other integer to fit the IEEE-754 representation.

The Number.isSafeInteger() method determines whether the provided value is a number that is a safe integer.

## String Data Type
A string value is a chain of zero or more Unicode characters (i.e., letters, digits, and punctuation marks) that we use to represent text. We include string literals in our scripts by enclosing them in single (') or double (") quotation marks. Double quotation marks can be contained in strings surrounded by single quotation marks (e.g., '"' evaluates to "), and single quotation marks can be contained in strings surrounded by double quotation marks (e.g., "'" evaluates to '). The following are examples of strings:
```js
var firstString = "Hello, There.";
var secondString = "How're you?";
var thirdString = "c";
var fourthString = '"Wow!!!", she shouted.';
```
Notice that JavaScript does not have a type to represent a single character. To represent a single character in JavaScript, you create a string that consists of only one character. A string that contains zero characters ("") is an empty (zero-length) string.

Unlike in languages like C, JavaScript strings are immutable. This means that once a string is created, it is not possible to modify it. However, it is still possible to create another string based on an operation on the original string. For example:

<li>A substring of the original by picking individual letters or using String.substr().
<li>A concatenation of two strings using the concatenation operator (+) or String.concat().

## Boolean Data Type
A boolean represents a logical entity and can have one of two literal values: true, and false.

## Symbol Data Type
Symbols are new to JavaScript in ECMAScript Edition 6. A Symbol is a unique and immutable primitive value and may be used as the key of an Object property.

## Null Data Type
The null data type is an internal type that has only one value: null. This is a primitive value that represents the absence of any object value. A variable that contains null contains no valid number, string, boolean, array, or object. You can erase the contents of a variable (without deleting the variable) by assigning it the null value.

## Undefined Data Type
The undefined value is returned when you use an object property that does not exist, or a variable that has been declared, but has never had a value assigned to it.

## The typeof Operator
As demonstrated in some of the code examples above, we can use the typeof operator to determine the type associated with a variable's current value:
```js
let a = 123;
console.log(typeof(a));
```

# Variables
## Dynamic Typing
JavaScript is a loosely typed or dynamic language, meaning you don't need to declare a variable's type ahead of time and the language autmatically determines a variable's type while the program is being processed. That also means that you can reassign a single variable to reference different types. For example:
```js
var someVariable = 5; 
print(someVariable);
```

## Naming
JavaScript is a case-sensitive language, meaning that a variable name such as myVariable is different from the variable name myvariable. Variable names can be of any length, and the rules for creating legal variable names are as follows:

<li>The first character must be either an ASCII letter (uppercase or lowercase) or an underscore (_). Note that a number cannot be used as the first character.
<li>Subsequent characters can be ASCII letters, underscores, or digits (e.g., the numbers  through ).
<li>The variable name must not be a reserved word.
The code below declares some valid variable names:

```js
var _daysCount
var MinimumCost
var page10
var Total_elements
```

The following declarations are invalid variable names and will not compile:

```js
// This will produce "SyntaxError: Unexpected number"
var 10Students

// This will produce "SyntaxError: Unexpected token &"
var First&Second

```
## Declaration and Initialization
The first time a variable appears in your script is considered its declaration. The first mention of the variable sets it up in memory, and the name allows you to refer back to it in your subsequent lines of code. You should declare variables using the var keyword before using them. If you do not initialize a variable that was declared using the var keyword, it automatically takes on the value undefined.

## Coercion
In JavaScript, you can perform operations on values of different types without raising an exception. The JavaScript interpreter implicitly converts, or coerces, one of the data types to that of the other, then performs the operation. The rules for coercion of string, number, or boolean values are as follows:

<li>If you add a number and a string, the number is coerced to a string.
<li>If you add a boolean and a string, the boolean is coerced to a string.
<li>If you add a number and a boolean, the boolean is coerced to a number.

<h1 id="arithmetic-operators">Arithmetic Operators</h1>

# Operator Types
## Unary
A unary operator requires a single operand, either before or after the operator, following this format:
```
operand operator
operator operand
```
For example, in the expression a++, ++ is a unary operator.

## Binary
A binary operator requires two operands, one before the operator and one after the operator, following this format:
```
operand1 operator operand2
```

For example, in the expression a + b = c, + is a binary operator.
## Ternary
There is one ternary operator, the conditional operator. For example, in the expression a ? b : c, the use of ? and : in this manner constitutes the ternary operator.

## Arithmetic Operators
An arithmetic operator takes numeric values (either literals or variables) as its operands and returns a single numeric value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/). Other arithmetic operators are remainder (%), unary negation (-), unary plus (+), increment (++), decrement (--), and exponentiation (**).

### 1. Addition (+)
We use this operator in the form operand1 + operand_2. For example:
```js
2 + 3 // evaluates to 5
4 + 10 // evaluates to 14
```

### 2. Subtraction (-)
We use this operator in the form operand1 - operand2. For example:

```
3 - 2 // evaluates to 1
4 - 10 // evaluates to -6
```
### 3. Multiplication (*)
We use this operator in the form operand1 * operand2. For example:

```
3 * 2 // evaluates to 6
4 * 10 // evaluates to 40
```
### 4. Division (/)
We use this operator in the form operand1 / operand2. For example:

```
6 / 3 // evaluates to 2
3 / 2 // evaluates to 1.5
4 / 10 // evaluates to 0.4
```
### 5. Remainder (%)
We use this operator in the form operand1 % operand2. For example:

```
6 % 3 // evaluates to 0
3 % 2 // evaluates to 1
4 % 10 // evaluates to 4
```
### 6. Exponentiation (**)
We use this operator in the form operand1 ** operand2. This operator is a part of ECMAScript2016 feature set. For example:

```
2 ** 3 // evaluates to 8
3 ** 2 // evaluates to 9
5 ** 4 // evaluates to 625
```
### 7. Unary Negation (-)
We use this operator in the form -operand. For example:

```
-4 // evaluates to -4
-(-5) // evaluates to 5 (not --5)
```
### 8. Unary Plus (+)
We use this operator in the form +operand. For example:

```
+4 // evaluates to 4
+(-4) // evaluates to -4
```
### 9. Increment (++)
We use this operator in the prefix and postfix forms, forms ++operand and operand++.

### 10. Decrement (--)
We use this operator in the prefix and postfix forms, forms --operand and operand--.

<h1 id="functions">Functions</h1>
Functions in JavaScript are declared using the function keyword. A function declaration creates a function that's a Function object having all the properties, methods, and behaviors of Function objects. By default, functions return the value undefined; to return any other value, the function must have a return statement that consists of the return keyword followed by the value to be returned (this can be a literal value, a variable, or even a call to a function).

```js
function greetings(name) {
    console.log("Hello, " + name);
}

function sum(a, b) {
    return a + b;
}

function main(name, a, b) {
    greetings(name);
    console.log(sum(a, b));
}
```
## The Function Expression
A function expression is very similar to (and has almost the same syntax as) a function statement. The main difference between a function expression and a function statement is the function name, which can be omitted from a function expression to create an anonymous function. Function expressions are often used as Immediately Invoked Function Expressions (IIFEs), which run as soon as they're defined.

### Unnamed Function Expression

```js
function main(input) {

    /**
    *   Defines an unnamed function and assigns it to a variable named square. 
    *   @param {Number} x
    *   @returns {Number} The value of argument squared.         
    **/
    var square = function(x) {
        return x * x;
    };

    // Print the value returned by passing input as x to the 
    // anonymous function referenced by variable square
    console.log(square(input));
}
```

### Named Function Expression
```js
function main(factN, fibN) {

    /**
    *   Defines a named recursive function as a property of the math variable. 
    *   @param {Number} n
    *   @returns {Number} The value of n factorial.         
    **/
    var math = {
        // Declare the factorial property
        factorial: 
            // Declare the function as the property's value
            function factorial(n) {
                if (n > 1) {
                    return n * factorial(n - 1);
                }
                // Returns 1 if n <= 1
                return 1;
            }
    };

    /**
    *   Defines a named recursive function referenced by the fib variable. 
    *   @param {Number} n
    *   @returns {Number} The value of fibonacci(n).         
    **/
    var fib = function fibonacci(n){
        if (n > 2) {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
        else if (n < 1) {
            return 0;
        }
        // else, return 1
        return 1;
    }

    // Print the value returned by passing factN as n to the 
    // function referenced by variable math:
    console.log(math.factorial(factN));
    // and by passing fibN as n to the function referenced by variable fib:
    console.log(fib(fibN));

}
```

## Recursion
This is an extremely important algorithmic concept that involves splitting a problem into two parts: a base case and a recursive case. The problem is divided into smaller subproblems which are then solved recursively until such time as they are small enough and meet some base case; once the base case is met, the solutions for each subproblem are combined and their result is the answer to the entire problem.



If the base case is not met, the function's recursive case calls the function again with modified values. The code must be structured in such a way that the base case is reachable after some number of iterations, meaning that each subsequent modified value should bring you closer and closer to the base case; otherwise, you'll be stuck in the dreaded infinite loop!



It's important to note that any task that can be accomplished recursively can also be performed iteratively (i.e., through a sequence of repeatable steps). Recursive solutions tend to be easier to read and understand than iterative ones, but there are often performance drawbacks associated with recursive solutions that you're going to want to evaluate on a case-by-case basis. Typically, we use recursion when each recursive call significantly reduces the size of the problem (e.g., if we can halve the dataset during each recursive call). Regardless of the advisability of recursively solving a problem, it's extremely important to practice and understand how to recursively solve problems.

