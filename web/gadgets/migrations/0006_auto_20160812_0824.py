# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-08-12 08:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gadgets', '0005_gadget_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gadget',
            name='name',
            field=models.CharField(blank=True, max_length=140),
        ),
    ]
