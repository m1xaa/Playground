import uuid
from django.db import models

from authorization.models import User

class Kid(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=250)
    image = models.CharField(max_length=250)
    age = models.IntegerField(default=0)
    birthdate = models.DateField(auto_now_add=False)
    parent = models.ForeignKey(User, related_name='kids', on_delete=models.CASCADE)
    
