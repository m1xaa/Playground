# myapp/serializers.py

from rest_framework import serializers
from authorization.models import User
from parents.serializers import KidSerializer

class UserSerializer(serializers.ModelSerializer):
    kids = KidSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'name', 'surname', 'password', 'email', 'kids']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        return User.objects.create(**validated_data)