from django.urls import path
from .views import api_shoes,delete_shoe

urlpatterns = [
    path("shoes/", api_shoes, name="api_shoes"),
    path("shoes/<int:id>", delete_shoe, name="api_shoe_delete")
]
