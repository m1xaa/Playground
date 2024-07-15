from rest_framework import serializers

from authorization.models import User
from tasks.serializers import TaskSerializer
from parents.models import Kid


class KidSerializer(serializers.ModelSerializer):
    tasks = TaskSerializer(many=True, read_only=True)
    parent = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    class Meta:
        model = Kid
        fields = ['id', 'name', 'description', 'image', 'age', 'birthdate', 'parent', 'tasks']

    def create(self, validated_data):
        return Kid.objects.create(**validated_data)

    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.image = validated_data.get('image', instance.image)
        instance.age = validated_data.get('age', instance.age)
        instance.birthdate = validated_data.get('birthdate', instance.birthdate)
        instance.save()
        return instance