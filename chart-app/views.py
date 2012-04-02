# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.utils import simplejson

def index(request):
	return render_to_response('home.html')

def graph(request):
        t1 = request.POST.get("t1")
        t2 = request.POST.get("t2")
        t3 = request.POST.get("t3")
        t4 = request.POST.get("t4")
        t5 = request.POST.get("t5")
        t6 = request.POST.get("t6")
	data = [['Mushrooms', t1],['Onions', t2],['Olives', t3],['Zucchini', t4], ['Pepperoni', t5],['Sandwich',t6]]
	return HttpResponse(simplejson.dumps(data),mimetype='application/json')
	
