# Generated by Django 4.0.3 on 2023-07-19 16:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shoes_rest', '0003_binvo_shoe_bin'),
    ]

    operations = [
        migrations.RenameField(
            model_name='binvo',
            old_name='bin_number',
            new_name='bin_id',
        ),
    ]