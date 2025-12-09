from django.shortcuts import render

# Create your views here.

def index(request):
    """Vista principal del e-commerce"""
    return render(request, 'web/index.html')

def preguntas_frecuentes(request):
    """Vista de preguntas frecuentes"""
    return render(request, 'web/preguntas_frecuentes.html')

def terminos(request):
    """Vista de términos y condiciones"""
    return render(request, 'web/terminos.html')
