from django.contrib import admin
from django.urls import path, include
from .views import categorias, contacto, galeria, index, agregar, iniciarsesion, mapa, mision, noticia1, noticia2, noticia3, registro 

urlpatterns = [
    path('',index,name='INDEX'),
    path('AgregarNoticia/',agregar,name='AGREGAR'),
    path('Categorias',categorias,name='CATEGORIAS'),
    path('Contacto',contacto,name='CONTACTO'),
    path('Galeria',galeria,name='GALERIA'),
    path('IniciarSesion',iniciarsesion,name='SESION'),
    path('Mapa',mapa,name='MAPA'),
    path('Mision',mision,name='MISION'),
    path('Noticia1',noticia1,name='NOTICIA1'),
    path('Noticia2',noticia2,name='NOTICIA2'),
    path('Noticia3',noticia3,name='NOTICIA3'),
    path('RegistroNuevo/',registro,name='REGISTRO')
]