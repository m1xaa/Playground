import uuid
from django.db import models

from parents.models import Kid

class Task(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    description = models.CharField(max_length=250)
    kid = models.ForeignKey(Kid, related_name='tasks', on_delete=models.CASCADE)

