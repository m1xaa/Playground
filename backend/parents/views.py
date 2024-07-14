from django.shortcuts import get_object_or_404, render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from authorization.models import User
from authorization.serializers import UserSerializer
from parents.models import Kid
from parents.serializers import KidSerializer

class ListCreateView(APIView):
    def get(self, request, parentId):
        parent = get_object_or_404(User, id=parentId)
        kids = Kid.objects.filter(parent=parent)
        serializer = KidSerializer(kids, many=True)
        return Response(serializer.data)

    def post(self, request, parentId):
        parent = get_object_or_404(User, id=parentId)
        request.data['parent'] = str(parentId)
        serializer = KidSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class PutDeleteView(APIView):
    def get(self, request, parentId, kidId):
        kid = Kid.objects.get(id=kidId)
        serializer = KidSerializer(kid)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, parentId, kidId):
        try:
            kid = Kid.objects.get(id=kidId, parent_id=parentId)
        except Kid.DoesNotExist:
            return Response({'error': 'Kid not found'}, status=status.HTTP_404_NOT_FOUND)
        request.data['parent'] = str(parentId)
        serializer = KidSerializer(kid, data=request.data)
        if serializer.is_valid():
            serializer.save() 
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, parentId, kidId):
        try:
            parent = User.objects.get(id=parentId)
        except User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        try:
            kid = Kid.objects.get(id=kidId, parent=parent)
        except Kid.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        kid.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
