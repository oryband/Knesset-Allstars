from django.conf.urls.defaults import *

urlpatterns = patterns('',

                       url(r'^$',
                           'django.views.generic.simple.redirect_to',
                           {'url': 'static/index.html'}),
                           #{'url': 'http://localhost:8000/static/html/knesset-allstars/index.html'}),

                       #url(r'^$',
                           #'allstars.views.index',
                           #name='index'),

                       #url(r'^(?P<team_id>\d+)/$',
                           #'allstars.views.team',
                           #name='team'),

                       #url(r'^api/save/$',
                           #'allstars.views.save',
                           #name='save'),
)

