from django.contrib.auth.models import User
from rest_framework import serializers
from .models import ShoppingItem


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        depth = 1


class ShoppingItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShoppingItem
        fields = '__all__'
        depth = 1