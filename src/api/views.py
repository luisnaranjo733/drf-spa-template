import logging

from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404

from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from rest_framework.views import APIView

from .serializers import UserSerializer, ShoppingItemSerializer
from .models import ShoppingItem

logger = logging.getLogger(__name__)

class ShoppingItemsEndpoint(APIView):
    def get(self, request):
        queryset = ShoppingItem.objects.all()
        serializer = ShoppingItemSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        shopping_item_name = request.data.get('item_name', None)

        if not shopping_item_name:
            response = Response(status=status.HTTP_400_BAD_REQUEST)
            response['error'] = 'Missing POST param "item_name"'
            logger.warn('Failed to create a shopping item due to missing post param')
            return response

        logger.debug('Succesfully created a shopping item')
        logger.warn('Failed to create a shopping item due to missing post param')

        shopping_item = ShoppingItem.objects.create(
            item_name=shopping_item_name,
            item_owner=request.user
        )

        serializer = ShoppingItemSerializer(shopping_item)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class ShoppingItemsDetailEndpoint(APIView):
    def get(self, request, pk):
        queryset = ShoppingItem.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = ShoppingItemSerializer(user)
        return Response(serializer.data)