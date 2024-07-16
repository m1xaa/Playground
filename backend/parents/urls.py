from .views import *
from django.urls import path

urlpatterns = [
    path('<uuid:parentId>/kids/', ListCreateView.as_view(), name='list_create_kids'),
    path('<uuid:parentId>/kids/<uuid:kidId>/', PutDeleteView.as_view(), name='put_delete_kids'),
]

