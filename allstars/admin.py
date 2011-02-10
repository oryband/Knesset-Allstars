from django.contrib import admin
from django.contrib.contenttypes import generic

from allstars.models import *

class TeamAdmin(admin.ModelAdmin):
    pass
    #list_display = ('ready', 'name') #, 'video', 'size')
    #fields       = ('name', 'video', 'poster')

admin.site.register(Team, TeamAdmin)

