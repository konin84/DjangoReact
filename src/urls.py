
from django.contrib import admin
from django.urls import path, include

from django.conf import settings # this is to import the settings configuration
from django.conf.urls.static import static # to import the static in the settings 
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('', TemplateView.as_view(template_name='index.html'))
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 
