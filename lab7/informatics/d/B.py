x = int(input())
x = 0;
a = [int(i) for i in input().split()]
for i in range(len(a)):
    if(a[i]>0):
        x+=1
print(x)
