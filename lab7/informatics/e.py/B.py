from operator import xor


a = [int(i) for i in input().split()]
print(xor(a[0],a[1]))