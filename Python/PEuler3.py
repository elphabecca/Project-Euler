# The prime factors of 13195 are 5, 7, 13 and 29.

# What is the largest prime factor of the number 600851475143 ?

def is_prime(num):

    for div in xrange(2,num):
        if num % div == 0:
            return False

def find_max_prime_factor(num):

    factor_set = set()
    prime_factors = []

    snum = num/2
    if num % 2 != 0:
        snum += 1
   
    for div in xrange(2, snum):
        if div in factor_set:
            continue
        if num % div == 0:
            factor = num/div
            factor_set.update([div, factor])
            if is_prime(div) != False:
                prime_factors.append(div)
                percent = float(div/snum)*100
                print div, percent, "%"
            if is_prime(factor) != False:
                prime_factors.append(factor)


    return max(prime_factors)
