from rest_framework.serializers import ModelSerializer
from .models import Employee, Product

class EmployeeSrializer(ModelSerializer):
  
  class Meta:
    model = Employee
    fields = ['id','first_name', 'last_name', 'DoB', 'telephone', 'email', 'salary']


class ProductSrializer(ModelSerializer):
  class Meta:
    model = Product
    fields = '__all__'