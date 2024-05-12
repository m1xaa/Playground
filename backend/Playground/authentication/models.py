from django.db import models
class User(models.Model):
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=20)

class Parent(models.Model):
    name = models.CharField(max_length=20)
    surname = models.CharField(max_length=20)
    age = models.IntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

class Kid(models.Model):
    name = models.CharField(max_length=20)
    surname = models.CharField(max_length=20)
    age = models.IntegerField(default=0)
    description = models.TextField(blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)