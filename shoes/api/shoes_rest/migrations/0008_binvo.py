# Generated by Django 4.0.3 on 2023-07-19 18:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shoes_rest', '0007_remove_shoe_bin_delete_binvo'),
    ]

    operations = [
        migrations.CreateModel(
            name='BinVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('import_href', models.CharField(max_length=200, unique=True)),
                ('bin_name', models.CharField(max_length=200)),
                ('bin_id', models.IntegerField(null=True)),
            ],
        ),
    ]