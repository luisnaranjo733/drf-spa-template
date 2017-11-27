from django.contrib.auth.models import User
from rest_framework import viewsets

from .serializers import UserSerializer, ShoppingItemSerializer
from .models import ShoppingItem


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class ShoppingListViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows shopping items to be viewed or edited.
    """
    queryset = ShoppingItem.objects.all()
    serializer_class = ShoppingItemSerializer