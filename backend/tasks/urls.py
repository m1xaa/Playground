from .views import *
from django.urls import path

urlpatterns = [
    path('<uuid:kidId>/tasks/', ListCreateView.as_view(), name='list_create_tasks'),
    path('<uuid:kidId>/tasks/<uuid:taskId>', DeleteListView.as_view(), name='delete_list_tasks')
]

