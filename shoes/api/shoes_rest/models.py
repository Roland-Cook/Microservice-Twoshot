from django.db import models

# Create your models here.


class BinVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    closet_name = models.CharField(max_length=200)
    bin_size = models.IntegerField(null=True)
    bin_number = models.IntegerField(null=True)


class Shoe(models.Model):
    name = models.CharField(max_length=100, null=True)
    manufacturer = models.CharField(max_length=100,null=True)
    color = models.CharField(max_length=50, null=True)
    picture_url = models.URLField( null=True)

    
    bin = models.ForeignKey(
        BinVO,
        related_name="bin",
        on_delete=models.CASCADE,
        null=True
    )
