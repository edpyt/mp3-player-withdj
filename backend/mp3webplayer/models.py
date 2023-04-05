from django.db import models
from django.core.validators import FileExtensionValidator
from django.utils.text import slugify


# Create your models here.
def upload(instance, filename):
    name = slugify(instance.name)
    playlist = slugify(instance.playlist)
    singer = slugify(instance.singer)
    if not instance.playlist:
        return f'uploads/{singer}/{name}/{filename}'
    return f'uploads/{singer}/{playlist}/{name}/{filename}'


class MyMp3Player(models.Model):
    name = models.CharField(max_length=50)
    playlist = models.CharField(max_length=100, blank=True)
    mp3_file = models.FileField(upload_to=upload,
                                validators=[FileExtensionValidator(['mp3', 'ogg'])],
                                max_length=1_000)
    photo = models.ImageField(upload_to=upload, max_length=1_000)
    singer = models.ForeignKey('Singer', on_delete=models.CASCADE, related_name='singer_set')

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('playlist', )


class Singer(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name