from django.shortcuts import get_object_or_404, render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from authorization.models import User
from tasks.models import Task
from tasks.serializers import TaskSerializer
from parents.models import Kid
from parents.serializers import KidSerializer
from .llama import get_response

class ListCreateView(APIView):
    def get(self, request, kidId):
        kid = get_object_or_404(Kid, id=kidId)
        tasks = Task.objects.filter(kid=kid)
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    def post(self, request, kidId):
        kid = get_object_or_404(Kid, id=kidId)
        task = get_response(kid.description)
        task['kid'] = str(kidId)
        serializer = TaskSerializer(data=task)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class DeleteListView(APIView):
    def delete(self, request, kidId, taskId):
        try:
            kid = Kid.objects.get(id=kidId)
            task = Task.objects.get(id=taskId)
        except Kid.DoesNotExist or Task.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
