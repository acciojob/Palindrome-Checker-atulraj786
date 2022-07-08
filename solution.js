// complete the given function

function palindrome(str){
  
 str = str.toLowerCase().replace(/[^a-z0-9]/gi,'');
  for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
    if (str.charAt(i) !== str.charAt(j)) return false;
  }
  return true;

}
module.exports = palindrome
