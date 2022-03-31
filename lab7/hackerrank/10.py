def toFixed(numObj, digits=0):
    return f"{numObj:.{digits}f}"


if __name__ == '__main__':
    
    n = int(input())
    student_marks = {}
    ans = float(0)
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()
    for key,value in student_marks.items():
        if(key==query_name):
            for i in range(len(student_marks[key])):
                ans+=student_marks[key][i]
    print(toFixed((ans/3),2))
    
                