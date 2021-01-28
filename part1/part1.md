1. console.log(i) will print 3 because it is a var with global scope
2. console.log(discountedPrice) will print 150 because it is a var with global scope
3. console.log(finalPrice) will print 150 because it is a var with global scope
4. [ 50, 100, 150 ]. This is because the function discountPrices(), traverses the given argument prices (list of numbers) 
   and applies the given argument discount (number) and creates the new list of discounted prices. .5 represents 50% of the original price.

5. console.log will throw an error because i is out of scope. i was declared using let in the for loop.
6. console.log will throw an error because discountedPrice is out of scope. discountedPrice was declared using let in the for loop.
7. console.log(finalPrice) will print 150 because it is scope of the function. finalPrice was declared using let at the beginning of the function.
8. [ 50, 100, 150 ]. This is because the function discountPrices(), traverses the given argument prices (list of numbers) 
   and applies the given argument discount (number) and creates the new list of discounted prices. .5 represents 50% of the original price.

9. console.log will throw an error because i is out of scope. i was declared using let in the for loop.
10.  console.log will throw an error because discountedPrice is out of scope. discountedPrice was declared using const in the for loop.
11.  console.log(finalPrice) will print 0 because it was a const set to 0 at the beginning of the function
12.  [ 0, 0, 0 ]. This is because it just pushes the constant finalPrice which was set to 0 at the beginning of the function.
    
13.  
  A. student.name
  B. student['Grad Year']
  C. student.greeting()
  D. student['Favorite Teacher'].name
  E. student.courseLoad[0]

14. 
  A. '3' + 2 becomes '32' because + acts as a concatenation operator
  B. '3' - 2 becomes 1 (number) because - is only a arithmetic operator
  C. 3 + null becomes 3 because, since 3 is a number, null gets converted to 0
  D. '3' + null becomes '3null" because, since + is the concatentation operator, null is treated as a string
  E. true + 3 becomes 4 because true is treated as 1
  F. false + null becomes 0 because false is treated as 0 (number)
  G. "3" + undefined becomes "3undefined" because + is treated as concatentation operator
  H. "3" - undefined is NaN b/c neither of the operands are numbers

15. 
  A. '2' > 1 true b/c '2' gets converted to a number
  B. '2' < '12' false b/c '2' and '12' are converted to numbers
  C. 2 == '2' true b/c '2' is converted to a number
  D. 2 === '2' false b/c '2' is not converted to a number
  E. true == 2 false b/c true is treated as 1
  F. true === Boolean(2) true b/c === checks if operands are equal w/o type conversions and Boolean(2) changes to true because 2 is a non-zero number.

16. == compares the value of the two operands (doing type conversion if needed) while === compares the value and types of the operands (does no type conversions).
17. 'How are you?' gets printed because true == 2 is false since true is treated as a number 1. Then in the else if(2), 2 is true because it is a non-zero number.
    
19. The result would be [6, 8, 10] because the list [1,2,3] and function doSomething() enter modifyArray, then for the length of the list (3 in this case), the for
    loop will push a new value onto the new list. The new value pushed is calculated by taking the ith value in the old list and the function(x) and passing it to 
    doSomething(). The number passed to doSomething gets + 2 and then sent to function(x) which multiplies it by 2. Then it gets pushed into the new list and repeats
    until the for loop is done. ((1 + 2) * 2, (2 + 2) * 2, (3 + 2) * 2) = [6, 8, 10]

21. 1
    4   - 1 and 4 print first b/c they have no interval to keep track of
    3   - 3 prints next because it has an interval of 0 seconds
    2   - 2 prints last because it has an interval of 1 second