from api.models import Company as someCompany, Vacancy as someVacancy
from django.http import JsonResponse


# Create your views here.

def companies_list(request):
    companies = someCompany.objects.all()
    companies_tojson = [company.to_json() for company in companies]
    return JsonResponse(companies_tojson, safe=False)


def companies_detail(request, companies_id):
    try:
        company = someCompany.objects.get(id=companies_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message', str(e)}, status=400)
    return JsonResponse(company.to_json())


def companies_vacancy(request, companies_id):
    try:
        vacancies = someVacancy.objects.filter(company=companies_id)
        vacancies_tojson = [vacancy.to_json() for vacancy in vacancies]
    except Company.DoesNotExist as e:
        return JsonResponse({'message'}, str(e), status=400)
    return JsonResponse(vacancies_tojson, safe=False)


def vacancy_list(request):
    vacancies = someVacancy.objects.all()
    vacancies_tojson = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_tojson, safe=False)


def vacancy_detail(request, vacancy_id):
    try:
        vacancy1 = someVacancy.objects.filter(id=vacancy_id)
        vacancies_tojson = [vacancy.to_json() for vacancy in vacancy1]
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message', str(e)}, status=400)
    return JsonResponse(vacancies_tojson,safe=False)


def top_ten(request):
    ordered = someVacancy.objects.order_by('-price')[:10]
    ordered_tojson = [item.to_json() for item in ordered]
    return JsonResponse(ordered_tojson,safe=False)
