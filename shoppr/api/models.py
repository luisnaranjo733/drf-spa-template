from django.db import models
from django.contrib.auth.models import User, Group

class ShoppingItem(models.Model):
    item_name = models.CharField(max_length=255)
    item_owner = models.ForeignKey(User)