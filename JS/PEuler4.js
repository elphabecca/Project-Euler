//Largest palindrome product (Problem 4)

//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

//Find the largest palindrome made from the product of two 3-digit numbers.

function is_palindrome(num) {
    num = num.toString();
    len = num.length;

    for (var i = 0, j = len-1; i <= len/2; i++, j--) {
        if (num[i] !== num[j]) {
            return false
        }
    }

    return true
}

function pal_product() {
    var maxProd = 0;

    for (var i = 100; i < 1000; i++) {
        console.log("\n***STARTING " + i + "***");
        for (var j = 100; j < 1000; j++) {
            if (is_palindrome(i*j)) {
                if ((i*j) > maxProd) {
                    maxProd = i*j;
                }
            }
        }
    }
    return maxProd
}

console.log(pal_product());



