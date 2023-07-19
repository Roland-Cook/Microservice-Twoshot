# Generated by Django 4.0.3 on 2023-07-19 15:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shoes_rest', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='shoe',
            name='color',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='shoe',
            name='manufacturer',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='shoe',
            name='picture_url',
            field=models.URLField(null=True),
        ),
        migrations.AlterField(
            model_name='shoe',
            name='name',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
