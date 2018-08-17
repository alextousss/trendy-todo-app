from api import serializers, models
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.mixins import CreateModelMixin, ListModelMixin, DestroyModelMixin, RetrieveModelMixin
from rest_framework.permissions import AllowAny, IsAuthenticated

class TodoViewSet(ModelViewSet):
    queryset = models.Todo.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = serializers.TodoSerializer
