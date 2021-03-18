/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (height) => {

      var rows,c;
     for( rows=1; rows<=height; rows++) {
          var output="";

               for( c=1; c<=( height-rows ); c++)
                    output+=" ";
                    
               for( c=1; c<=rows; c++)
                    output+="* ";
                    
     console.log(output);
     }

};


const readline = require('readline').createInterface({
     input: process.stdin,
     output: process.stdout
   });
    
   readline.question('Input height of the pyramid:', height => {
     console.log(height);
     buildPyramid(height);
     readline.close();
   });






/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

//module.exports = buildPyramid;
