# Generated by Django 2.2.16 on 2020-09-13 02:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='report',
            name='content',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
    ]