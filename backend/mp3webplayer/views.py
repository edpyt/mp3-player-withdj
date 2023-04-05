from django.db.models import F
from django.views.generic import ListView
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import MyMp3Player, Singer
from .serializers import MyMp3PlayerSerializer, SingerSerializer
from .permissions import IsAdminOrReadOnly


class Mp3View(ListView):
    model = MyMp3Player
    template_name = 'mp3/list.html'
    context_object_name = 'mp3list'

    def get_queryset(self):
        playlist = self.kwargs.get('playlist')
        if playlist:
            return MyMp3Player.objects.filter(playlist=playlist)
        return super().get_queryset()


class Mp3PlayerViewSet(viewsets.ModelViewSet):

    queryset = MyMp3Player.objects.all()
    serializer_class = MyMp3PlayerSerializer


class SingerViewSet(viewsets.ModelViewSet):

    queryset = Singer.objects.all()
    serializer_class = SingerSerializer
