# Generated by Django 4.1.7 on 2023-04-04 07:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mp3webplayer', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='mymp3player',
            name='playlist',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='mymp3player',
            name='name',
            field=models.CharField(max_length=50),
        ),
    ]
