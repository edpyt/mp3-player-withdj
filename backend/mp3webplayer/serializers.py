from rest_framework import serializers
from .models import MyMp3Player, Singer


class MyMp3PlayerSerializer(serializers.ModelSerializer):
    singer = serializers.SerializerMethodField()

    class Meta:
        fields = '__all__'
        model = MyMp3Player

    def get_singer(self, instance):
        return instance.singer.name


class SingerSerializer(serializers.ModelSerializer):
    song_list = MyMp3PlayerSerializer(source='singer_set', many=True)

    class Meta:
        fields = ('name', 'song_list')
        model = Singer
        depth = 1
