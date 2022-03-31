n = int(input())
k = 2
if (n ==1):
    print("YES")
else:
    while k != n:
    
        if k > n:
            print("NO")
            break
        k = k * 2
    else:
        print("YES")