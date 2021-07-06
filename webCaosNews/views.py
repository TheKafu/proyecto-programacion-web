from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "index.html")

def agregar(request):
    return render(request, "agrNoticia.html")

def categorias(request):
    return render(request, "categorias.html")

def contacto(request):
    return render(request, "contacto.html")

def galeria(request):
    return render(request, "galeria.html")

def iniciarsesion(request):
    return render(request, "Iniciodesesion.html")

def mapa(request):
    return render(request, "mapa.html")

def mision(request):
    return render(request, "mision.html")

def noticia1(request):
    return render(request, "noticia1.html")

def noticia2(request):
    return render(request, "noticia2.html")

def noticia3(request):
    return render(request, "noticia3.html")

def registro(request):
    return render(request, "registroNuevo.html")