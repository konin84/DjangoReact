from django.urls import path
from . import views

urlpatterns = [
  path('', views.getRoutes, name='routes'),
  path('create/', views.createEmployee, name='create'),
  path('employees/', views.getEmployees, name='employees'),
  path('employees/<str:pk>/', views.getOnlyOneEmployeeBasedOnId, name='employee'),
  path('employee/update/<str:pk>/', views.updateEmployee, name='update-employee'),
  path('employee/delete/<str:pk>/', views.deleteEmployee, name='update-employee'),

  path('products/', views.getProducts, name='products'),
  path('products/create/', views.productCreate, name='create-product'),



]