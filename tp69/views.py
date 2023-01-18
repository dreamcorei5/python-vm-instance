from django.shortcuts import render
from django.http import HttpResponse

def index(request) :
    return render(request,'frontend/index.html')

def register(request) :
    return render(request,'frontend/register.html')

def login(request) :
    return render(request,'frontend/login.html')

def post(request) :
    return render(request,'frontend/post.html')

def mypost(request) :
    return render(request,'frontend/mypost.html')

def profile1(request) :
    return render(request,'frontend/profile-1.html')

def profile2(request) :
    return render(request,'frontend/profile-2.html')

def search(request) :
    return render(request,'frontend/search.html')

def topup(request) :
    return render(request,'frontend/topup.html')

def topup2(request) :
    return render(request,'frontend/topup2.html')

def verification(request) :
    return render(request,'frontend/verification.html')