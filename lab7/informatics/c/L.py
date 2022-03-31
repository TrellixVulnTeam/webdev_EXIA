def bin_to_dec(digit):  
    dlina=len(digit)                    
    chislo_dec=0           
    for i in range(0, dlina):               
        chislo_dec=chislo_dec+int(digit[i])*(2**(dlina-i-1))           
        return chislo_dec   
a=input()
print(bin_to_dec(a))
