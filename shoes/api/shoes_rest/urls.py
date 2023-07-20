from django.urls import path
from .views import api_shoes, api_shoe_detail

urlpatterns = [
    path("shoes/", api_shoes, name="api_shoes"),
    path("shoes/<int:id>/", api_shoe_detail, name="api_shoe_detail")
]
