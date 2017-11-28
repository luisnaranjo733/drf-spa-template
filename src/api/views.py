from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404

from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.views import APIView

from .serializers import UserSerializer, ShoppingItemSerializer
from .models import ShoppingItem


class ShoppingItemsEndpoint(APIView):
    def get(self, request, format=None):
        queryset = ShoppingItem.objects.all()
        serializer = ShoppingItemSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        queryset = ShoppingItem.objects.all()
        serializer = ShoppingItemSerializer(queryset, many=True)
        return Response(serializer.data)

class ShoppingItemsDetailEndpoint(APIView):
    def get(self, request, pk):
        queryset = ShoppingItem.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = ShoppingItemSerializer(user)
        return Response(serializer.data)