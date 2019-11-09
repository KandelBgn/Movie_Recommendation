from django.db import models
from django.conf import settings


# Create your models here.

class Movie(models.Model):
    mName = models.CharField(max_length=100)
    description = models.TextField(null=True)
    image = models.ImageField(upload_to='images', null=True)
    video = models.FileField(upload_to='videos', null=True)
    userID = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)

