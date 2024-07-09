# myapp/serializers.py

from rest_framework import serializers
from authorization.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['password', 'email', 'name', 'surname']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        return User.objects.create(**validated_data)