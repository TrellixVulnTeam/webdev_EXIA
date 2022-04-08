from django.db import models


# Create your models here.

class Categories(models.Model):
    name = models.CharField(max_length=100)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name


        }


class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField(default=0)
    description = models.TextField()
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=False)
    category_id = models.ForeignKey(Categories, on_delete=models.CASCADE)


    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active,
            

        }