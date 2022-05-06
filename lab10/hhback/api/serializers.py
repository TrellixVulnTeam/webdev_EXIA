from rest_framework import serializers

from api.models import Company,Vacancy





class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField(read_only=True)
    city = serializers.CharField(read_only=True)
    address = serializers.CharField(read_only=True)

    def create(self, validated_data):
        company = Company.objects.create(name=validated_data.get('name'))
        return company

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.save()
        return instance


class Vacancy2Serializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ('id','name','price',)


class CompanySerializer2(serializers.ModelSerializer):
    # Vacancies = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    # Vacancies = serializers.StringRelatedField(many=True,read_only=True)
    # Vacancies = Vacancy2Serializer(many=True,read_only=True)

    class Meta:
        model = Company
        fields = ('id','name','description','address','city',)
        # read_only_fields=('Vacancies',)


class CompanyVacancySerializer(serializers.ModelSerializer):
    # Vacancies = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    # Vacancies = serializers.StringRelatedField(many=True,read_only=True)
    Vacancies = Vacancy2Serializer(many=True,read_only=True)

    class Meta:
        model = Company
        fields = ('Vacancies',)
        # read_only_fields=('Vacancies',)


class VacancySerializer(serializers.ModelSerializer):
    company = CompanySerializer2(read_only=True)
    company_id = serializers.IntegerField(write_only=True)
    class Meta:
        model = Vacancy
        fields = ('id','name','description','price','company','company_id')



