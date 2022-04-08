from api2.models import Product, Categories
from django.http import JsonResponse


# Create your views here.

# def all_products(request):
#     return render(request,'')


def product_list(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)


def category_list(request):
    categories = Categories.objects.all()
    categories_json = [category.to_json() for category in categories]
    return JsonResponse(categories_json, safe=False)


def product_detail(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'message',str(e)},status = 400)
    return JsonResponse(product.to_json())


def category_detail(request ,category_id):
    try:
        category = Categories.objects.get(id=category_id)
    except Categories.DoesNotExist as e:
        return JsonResponse({'message', str(e)}, status=400)
    return JsonResponse(category.to_json())


def category_product(request, categoryid):
    try:
        products = Product.objects.filter(category_id=categoryid)
        total = [product.to_json() for product in products]
    except Categories.DoesNotExist as e:
        return JsonResponse({'message', str(e)}, status=400)
    return JsonResponse(total, safe=False)