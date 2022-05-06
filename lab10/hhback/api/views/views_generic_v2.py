from rest_framework import generics
from rest_framework import mixins
from api.serializers import *
from api.models import Company,Vacancy
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from django.shortcuts import Http404
from django.utils.encoding import smart_text



class CompanyListAPIView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer2
    # permission_classes = (IsAuthenticated,)


class CompanyDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer2
    # lookup_field = 'company_id'


@api_view(['GET'])
def CompanyVacancyAPIView(request, pk):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all().filter(company_id=pk)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)


class VacancyListAPIView(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer


class VacancyDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class Top_TenAPIView(generics.ListAPIView):
    queryset = Vacancy.objects.order_by('-price')[:10]
    serializer_class = VacancySerializer


