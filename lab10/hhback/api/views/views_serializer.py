import json

from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from api.models import Company, Vacancy
from api.serializers import CompanySerializer2
# from api.serializers import CompanySerializer


@csrf_exempt
def companies_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer2(companies, many=True)
        # companies_tojson = [company.to_json() for company in companies]
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = CompanySerializer2(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)

        return JsonResponse(serializer.errors)


@csrf_exempt
def companies_detail(request, companies_id):
    try:
        company = Company.objects.get(id=companies_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializer = CompanySerializer2(company)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = CompanySerializer2(instance=company, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'message': 'deleted'}, status=204)


@csrf_exempt
def companies_vacancy(request, companies_id):
    try:
        vacancies = Vacancy.objects.filter(company=companies_id)
        vacancies_tojson = [vacancy.to_json() for vacancy in vacancies]
    except Company.DoesNotExist as e:
        return JsonResponse({'message'}, str(e), status=400)

    if request.method == 'GET':
        return JsonResponse(vacancies_tojson, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        try:
            vacancy = Vacancy.objects.create(name=data['name'], company_id=companies_id)
        except Exception as e:
            return JsonResponse({'message': str(e)})
        return JsonResponse(vacancy.to_json())


@csrf_exempt
def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies_tojson = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_tojson, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        try:
            vacancy = Company.objects.create(name=data['name'], company_id=data['company'])
        except Exception as e:
            return JsonResponse({'message': str(e)})

        return JsonResponse(vacancy.to_json())


@csrf_exempt
def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(vacancy.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        vacancy.name = data['name']
        vacancy.company_id = data['company']
        vacancy.save()
        return JsonResponse(vacancy.to_json())
    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'message': 'deleted'}, status=204)


@csrf_exempt
def top_ten(request):
    if request.method == 'GET':
        ordered = Vacancy.objects.order_by('-price')[:10]
        ordered_tojson = [item.to_json() for item in ordered]
        return JsonResponse(ordered_tojson, safe=False)
