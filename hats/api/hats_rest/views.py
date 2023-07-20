from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import LocationVO, Hat


# Encoders
# LocationVO Encoder
class LocationVOEncoder(ModelEncoder):
    model = LocationVO
    properties = [
        "closet_name",
        "section_number",
        "shelf_number",
        "import_href",
    ]


# Hat Encoder (Possibly a list and Detail)
class HatListEncoder(ModelEncoder):
    model = Hat
    properties = [
        "style_name",
        "fabric",
        "color",
        "picture_url",
        "location",
    ]
    encoders = {
        "location": LocationVOEncoder(),
    }


class HatDetailEncoder(ModelEncoder):
    model = Hat
    properties = [
        "style_name",
        "fabric",
        "color",
        "picture_url",
        "location",
    ]
    encoders = {
        "location": LocationVOEncoder(),
    }

# Create your views here.
# api_hat_list


@require_http_methods(["GET", "POST"])
def api_list_hats(request):
    if request.method == "GET":
        hats = Hat.objects.all()
        print(hats)
        return JsonResponse(
            {"hats": hats},
            encoder=HatListEncoder,
        )
    else:
        print("This is the request body: ", request.body)
        content = json.loads(request.body)
        print("This is the content", content)
        try:
            location_href = content["location"]
            location = LocationVO.objects.get(import_href=location_href)
            content["location"] = location
        except LocationVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid location id"},
                status=400
            )

        hats = Hat.objects.create(**content)
        return JsonResponse(
            hats,
            encoder=HatDetailEncoder,
            safe=False,
        )


# Get Detail




# api_delete_hat