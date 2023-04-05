from django.urls import path
from rest_framework.routers import SimpleRouter

from .views import Mp3View, Mp3PlayerViewSet, SingerViewSet


router = SimpleRouter()
router.register('api/songs', Mp3PlayerViewSet, basename='songs')
router.register('api/singers', SingerViewSet, basename='singers')


urlpatterns = [
    path('', Mp3View.as_view(), name='mp3_list'),
    path('<str:playlist>/', Mp3View.as_view(), name='mp3_playlist'),
] + router.urls