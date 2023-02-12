from datetime import date
from django.db import models
from django.contrib.auth.models import User


class Product(models.Model):
    name = models.CharField(max_length=200, null=True )
    price = models.FloatField()
    digital = models.BooleanField(default=False, null=True, blank=True)
    # image = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.name

    # @property
    # def imageURL(self):
    #     try:
    #         url = self.image.url
    #     except:
    #         url = ''
    #     return  url


class Employee(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    DoB = models.DateField()
    telephone= models.CharField(max_length=17, null=True, blank=True)
    email= models.EmailField(null=True, blank=True)
    salary = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    # avatar = models.ImageField(null=True, upload_to="employee", blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    # Capitalise (First name and Last name)
    def clean(self):
        self.first_name = self.first_name.capitalize()
        self.last_name = self.last_name.capitalize()
        self.email = self.email.lowercase()

    class Meta:
        ordering =['-created', '-updated']

    def get_full_name(self):
        return '%s %s' % (self.first_name, self.last_name)

    # CAPITALISE FIELDS
    def clean(self):
        self.first_name = self.first_name.capitalize()     
        self.last_name = self.last_name.capitalize()  

    # @property
    # def avatarURL(self):
    #     try:
    #         url = self.avatar.url
    #     except:
    #         url = ''
    #     return  url

   
    def __str__(self):
      return f'{self.id}-{self.last_name}'

