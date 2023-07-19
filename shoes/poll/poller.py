import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "shoes_project.settings")
django.setup()



# Import models from hats_rest, here.

from shoes_rest.models import BinVO


def get_bins():
    response = requests.get("http://wardrobe-api:8000/api/bins")
    print(response)
    content = json.loads(response.content)
    print(content)
    for bin in content["bins"]:
        BinVO.objects.update_or_create(
            import_href=bin["import_href"],
            defaults={"closest_name": bin["closest_name"]},
        )


def poll():
    while True:
        print('Shoes poller polling for data')
        try:
            get_bins()
            print("got data")
            pass
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(15)


if __name__ == "__main__":
    poll()
