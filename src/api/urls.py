from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^shopping/$', views.ShoppingItemsEndpoint.as_view()),
    url(r'^shopping/(?P<pk>[0-9]+)/$', views.ShoppingItemsDetailEndpoint.as_view()),

]