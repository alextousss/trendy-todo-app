from rest_framework import routers
from api import views as myapp_views

router = routers.DefaultRouter()
router.register(r'todo', myapp_views.TodoViewSet)
