from django.shortcuts import render
from django.http import JsonResponse
import json
# from .models import BinVO
from django.views.decorators.http import require_http_methods

from .models import Shoe, BinVO
from common.json import ModelEncoder

# Create your views here.

class BinVOEncoder(ModelEncoder):
    model = BinVO
    properties = ["closet_name", "import_href","bin_number","bin_size"]

class ShoeEncoder(ModelEncoder):
    model = Shoe
    properties = [
        "name", "manufacturer", "color", "picture_url","id"
    ]

    encoders = {
    "bin": BinVOEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_shoes(request):
        if request.method == "GET":
            Shoes = Shoe.objects.all()
            return JsonResponse(
                {"shoes": Shoes},
                encoder=ShoeEncoder,
            )
        else:
            content = json.loads(request.body)
            try:
                shoe = Shoe.objects.create(**content)
                shoe.save()
                return JsonResponse(
                    shoe,
                    encoder=ShoeEncoder,
                    safe=False,
                )
            except Shoe.DoesNotExist:
                return JsonResponse(
                {"message": "Invalid state abbreviation"},
                status=400,
            )
        
@require_http_methods(["DELETE"])
def delete_shoe (request,id):
        count, _ = Shoe.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})
