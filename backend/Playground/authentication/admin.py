from django.contrib import admin

from .models import User, Parent, Kid

admin.site.register(User)
admin.site.register(Parent)
admin.site.register(Kid)
