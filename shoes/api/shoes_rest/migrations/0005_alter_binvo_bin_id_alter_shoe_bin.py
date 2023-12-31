# Generated by Django 4.0.3 on 2023-07-19 17:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shoes_rest', '0004_rename_bin_number_binvo_bin_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='binvo',
            name='bin_id',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='shoe',
            name='bin',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='bin', to='shoes_rest.binvo'),
        ),
    ]
