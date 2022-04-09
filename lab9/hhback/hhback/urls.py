"""hhback URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from api.views import companies_list,companies_detail,companies_vacancy,vacancy_list,vacancy_detail,top_ten

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/companies/', companies_list),
    path('api/companies/<int:companies_id>/', companies_detail),
    path('api/companies/<int:companies_id>/vacancies/',companies_vacancy),
    path('api/vacancies/', vacancy_list),
    path('api/vacancies/<int:vacancy_id>', vacancy_detail),
    path('api/vacancies/top_ten/', top_ten)
]
