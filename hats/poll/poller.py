import django
import os
import sys
import time
import json
import requests
from ..api.hats_rest.models import LocationVO

sys.path.append("")
print(sys.path)
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "hats_project.settings")
django.setup()



def get_locations():
    response = requests.get("http://wardrobe-api:8000/")
    content = json.loads(response.content)
    for location in content["locations"]:
        LocationVO.objects.update_or_create(
            import_href=location["href"],
            defaults={
                "closet_name": location["closet_name"],
                "section_number": location["section_number"],
                "shelf_number": location["shelf_number"],
                },
        )


def poll():
    while True:
        print('Hats poller polling for data')
        try:
            get_locations()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
