from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^ingredients/$', views.get_all_ingredients, name='detail'),
    url(r'^ingredients/(?P<question_id>[A-Za-z0-9]+)/$', views.get_price_by_name, name='detail'),
]