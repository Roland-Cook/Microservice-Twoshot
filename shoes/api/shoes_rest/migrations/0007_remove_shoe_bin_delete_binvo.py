# Generated by Django 4.0.3 on 2023-07-19 18:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shoes_rest', '0006_alter_shoe_bin'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='shoe',
            name='bin',
        ),
        migrations.DeleteModel(
            name='BinVO',
        ),
    ]
