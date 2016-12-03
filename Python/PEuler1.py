def sum_nat_nums(num):

    nat_sum = 0

    for n in range(3,num):
        if n % 3 == 0 or n % 5 == 0:
            nat_sum += n

    return nat_sum