// Exercise #2: Loose Equality
// Start commenting here
0 == false; //True
null == NaN; //false => True (The end result is same as "blank" so loose equality logic seem to see it as equal)
10 == "10";  //True
[10] == 10;  //False => True (The end result is same so loose equality logic seem to see it as equal)
[1,2] == "1,2"; //false => True (The end result is same so loose equality logic seem to see it as equal)

