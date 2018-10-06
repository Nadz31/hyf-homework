let Array = [{'color':'white'},{'color':'Black'},{'color':'Pink'}];
function myArray(color1,color2,color3)
{

Array[0].color = color1;
Array[1].color = color2;
Array[2].color = color3;

return Array;
 
}

let colorObjects = myArray('Red','Blue','Yellow');
console.log(colorObjects);

for(i = 0; i < Array.length ; i++){
    console.log(Array[i].color);}