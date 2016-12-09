# PEuler5

# 2520 is the smallest number that can be divided by each of
# the numbers from 1 to 10 without any remainder.

# What is the smallest positive number that is evenly divisible
# by all of the numbers from 1 to 20?

for i in xrange(20,232792561,20):
    is_div = True

    for j in range(2,21):
        if i%j != 0:
            is_div = False
            break

    if is_div:
        print i
        break



