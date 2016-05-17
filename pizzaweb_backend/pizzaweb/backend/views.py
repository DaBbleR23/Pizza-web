from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from backend.models import ingredients
from django.core import serializers

# Create your views here.

def get_all_ingredients(request):
    ingredients_data = ingredients.objects.all()

    #Every field except the price
    data = serializers.serialize("json", ingredients_data, fields=("description", "id", "name", "type", "vege","multiplicity"))
    return HttpResponse(data, content_type='application/json')

def get_price_by_name(request,question_id):
    print(question_id)
    ingredients_data = ingredients.objects.filter(name=question_id)

    #Only the price
    data = serializers.serialize("json", ingredients_data,fields=("price"))
    return HttpResponse(data, content_type='application/json')
