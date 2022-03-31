if __name__ == '__main__':
    num = int(input())
    x = [int(i) for i in input().split()]
a = set();

cnt = int(0)
for i in x:
    a.add(i)
a = list(a)
a.sort()
for i in a:

    cnt+=1;
    if( cnt == len(a)-1):
        print(i)
        break


