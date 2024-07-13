from rest_framework import serializers

from authorization.models import User
from parents.models import Kid


class KidSerializer(serializers.ModelSerializer):
    parent = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    class Meta:
        model = Kid
        fields = ['id', 'name', 'description', 'image', 'age', 'birthdate', 'parent']

    def create(self, validated_data):
        return Kid.objects.create(**validated_data)

    
    def update(self, instance, validated_data):
        parent_id = validated_data.pop('parentId')
        parent = User.objects.get(id=parent_id)
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.image = validated_data.get('image', instance.image)
        instance.age = validated_data.get('age', instance.age)
        instance.birthdate = validated_data.get('birthdate', instance.birthdate)
        instance.parent = parent
        instance.save()
        return instance