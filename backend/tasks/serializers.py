from rest_framework import serializers

from authorization.models import User
from tasks.models import Task
from parents.models import Kid


class TaskSerializer(serializers.ModelSerializer):
    kid = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    class Meta:
        model = Task
        fields = ['id', 'title', 'category', 'description', 'kid']

    def create(self, validated_data):
        return Kid.objects.create(**validated_data)
