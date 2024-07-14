import json
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from authorization.models import User
from authorization.serializers import UserSerializer


@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):
    data = request.data
    if 'email' not in data or 'password' not in data:
        return Response({'error': 'Email and password are required.'}, status=status.HTTP_400_BAD_REQUEST)
    try:
        user = User.objects.get(email=data['email'])
    except User.DoesNotExist:
        return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)

    if not data['password'] == user.password:
        return Response({'error': 'Invalid password.'}, status=status.HTTP_400_BAD_REQUEST)
    
    serializer = UserSerializer(user)  
    return Response(serializer.data, status=status.HTTP_200_OK)