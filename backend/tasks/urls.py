from .views import *
from django.urls import path

urlpatterns = [
    path('<uuid:kidId>/tasks/', ListCreateView.as_view(), name='list_create_tasks'),
]

