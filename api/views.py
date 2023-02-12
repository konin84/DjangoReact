from rest_framework.response import Response
from rest_framework.decorators import api_view
# Create your views here.
from .models import Employee, Product
# 
from .serializers import EmployeeSrializer, ProductSrializer

@api_view(['GET'])
def getRoutes(request):
  routes = [
  {
    'Endpoint': '/employee',
    'method': 'GET',
    'body': None,
    'description': 'Returns as an array of employees'
  },
  {
    'Endpoint': '/employee/id',
    'method': 'POST',
    'body': None,
    'description': 'Returns as a sigle employee'
  },
  {
    'Endpoint': '/employee/create/',
    'method': 'POST',
    'body': {'BODY':""},
    'description': 'Create new employee with data sent in post a request'
  },
  {
    'Endpoint': '/employee/id/update/',
    'method': 'PUT',
    'body': {'BODY':""},
    'description': 'Create an existing employee with data sent in post a request'
  },
  {
    'Endpoint': '/notemployeees/id/delete',
    'method': 'DELETE',
    'body': None,
    'description': 'Delete an existing employee'
  },
]

  return Response(routes)


@api_view(['GET'])
def getEmployees(request):
  # Querying Employees table/model
  employees = Employee.objects.all()
  # Converting the Employees query into json
  serializer = EmployeeSrializer(employees, many=True)
  return Response(serializer.data)

@api_view(['GET'])
def getOnlyOneEmployeeBasedOnId(request, pk):
  # Querying Employees table/model
  employee = Employee.objects.get(id=pk)
  # Converting the Employees query into json
  serializer = EmployeeSrializer(employee, many=False)
  return Response(serializer.data)


@api_view(['POST'])
def createEmployee(request):
  # Converting the Employees query into json
  serializer = EmployeeSrializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
  return Response(serializer.data)

@api_view(['POST'])
def updateEmployee(request, pk):
  # getting only the task with corresponding id
  employee = Employee.objects.get(id=pk)
  # Converting the tasks query into json
  serializer = EmployeeSrializer(instance =employee, data=request.data)
  if serializer.is_valid():
    serializer.save()
  return Response(serializer.data)

@api_view(['DELETE'])
def deleteEmployee(request, pk):
  #  getting only the employee with corresponding id
  employee = Employee.objects.get(id=pk)
  employee.delete()
  return Response(f'empoyee {employee} was deleted')


  # 

@api_view(['GET'])
def getProducts(request):
  # Querying Employees table/model
  products = Product.objects.all()
  # Converting the Employees query into json
  serializer = ProductSrializer(products, many=True)
  return Response(serializer.data)

@api_view(['POST'])
def productCreate(request):
  # Converting the tasks query into json
  serializer = ProductSrializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
  return Response(serializer.data)
