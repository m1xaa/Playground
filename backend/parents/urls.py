from .views import *
from django.urls import path

urlpatterns = [
    path('<uuid:parentId>/kids/', KidsView.as_view(), name='kids'),  # Class-based view for GET and POST
    path('<uuid:parentId>/kids/<uuid:kidId>/', get, name='get_kid'),
    path('<uuid:parentId>/kids/<uuid:kidId>/', update, name='update_kid'),
    path('<uuid:parentId>/kids/<uuid:kidId>/', delete, name='delete_kid'),
]

