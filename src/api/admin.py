from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.admin import AdminSite

from .models import ShoppingItem



class ShoppingItemAdmin(admin.ModelAdmin):
    pass

class MyAdminSite(AdminSite):
    site_header = 'Shoppr administration'
    site_title = 'Shoppr Web'
    site_url = None

admin_site = MyAdminSite(name='ShopprAdmin')
admin_site.register(User)
admin_site.register(ShoppingItem, ShoppingItemAdmin)