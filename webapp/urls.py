from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
]

urlpatterns += [
    path('make_report/', views.make_report, name='make_report'),
]

urlpatterns += [
    path('track_report/', views.track_report, name='track_report'),
]