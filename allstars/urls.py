from django.conf.urls.defaults import *

urlpatterns = patterns('',
   url(r'^$', 'django.views.generic.simple.redirect_to', {'url': 'http://localhost:8000/static/index.html'}),
)

