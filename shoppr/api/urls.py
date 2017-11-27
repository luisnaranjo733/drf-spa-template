from django.conf.urls import url
from rest_framework import routers

from . import views

router = routers.SimpleRouter()
router.register(r'users', views.UserViewSet)
router.register(r'shopping', views.ShoppingListViewSet)
urlpatterns = router.urls