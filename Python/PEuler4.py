

def pal_product():

    max_prod = 0

    for i in xrange(100,1000):
        print "\n***STARTING %s***" % i 
        for j in xrange(100,1000):
            if is_palindrome(i*j):
                if i*j > max_prod:
                    max_prod = i*j
                    curr_i = i
                    curr_j = j

    return max_prod, curr_i, curr_j

def is_palindrome(num):

    num = str(num)

    for i in range(len(num)/2):
        if num[i] != num[-i - 1]:
            return False

    return True
