from django.shortcuts import render, get_object_or_404
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
        "name", "manufacturer", "color", "picture_url","bin",
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
            print(content)
            try:
                bin_href = content["bin"]
                print(bin_href)
                bin = BinVO.objects.get(import_href=bin_href)
                content["bin"] = bin
                print(bin)
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


@require_http_methods(["GET", "DELETE"])
def api_shoe_detail(request,id):
    if request.method == "GET":
        shoe = Shoe.objects.get(id=id)
        return JsonResponse(
            shoe,
            encoder=ShoeEncoder,
            safe=False,
        )
    else:
        count, _ = Shoe.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})

        
