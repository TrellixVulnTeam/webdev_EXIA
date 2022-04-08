

import json
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.template import loader


# Create your views here.

# def all_products(request):
#     return render(request,'')
products = [
    {'id':1,
    'name':"Product 1",
    'description':"This is product 1",
    'count':5,
    'is_active':True,
    'category_id':2},
    {'id':2,
    'name':"Product 2",
    'description':"This is product 2",
    'count':6,
    'is_active':False,
    'category_id':1},
    {'id':3,
    'name':"Product 3",
    'description':"This is product 3",
    'count':7,
    'is_active':True,
    'category_id':2},
    {'id':4,
    'name':"Product 4",
    'description':"This is product 4",
    'count':8,
    'is_active':False,
    'category_id':1}
]
category = [{
    'id':1,
    'name':"Liquid"
    },
    {
        'id':2,
        'name':"solid"
    }]


def product_list(request):
    return JsonResponse(products,safe=False)
def category_list(request):
    return JsonResponse(category,safe=False)
def product_detail(request, product_id):
    for product in products:
        if product['id'] == product_id:
            return JsonResponse(product)
def category_detail(request,category_id):
    for categor in category:
        if categor['id']== category_id:
            return JsonResponse(categor)
def category_product(request,category_id):
    ans = []
    for product in products:
        if product['category_id']==category_id:
            ans.append(product)
            
    return JsonResponse(ans,safe=False)
