from django.views.generic import ListView
from django.shortcuts import render
import pyrebase
from django.contrib import auth
# Create your views here.
config = {
'apiKey': "AIzaSyBMVKmYH4nxqRTahVl-_M1INoiG-4abL-E",
'authDomain': "genetree-54b3b.firebaseapp.com",
'databaseURL': "https://genetree-54b3b.firebaseio.com",
'projectId': "genetree-54b3b",
'storageBucket': "genetree-54b3b.appspot.com",
'messagingSenderId': "865253565447"
}
firebase = pyrebase.initialize_app(config)
authe=firebase.auth()
database=firebase.database()
def signIn(request):
	return render(request, 'home.html')

def postSign(request):
	email = request.POST.get('email')
	passw = request.POST.get('pass')
	try:
		user= authe.sign_in_with_email_and_password(email,passw)
	except:
		message="Sign in failed, please check email and password"
		return render(request,'home.html',{"mesg":message})
	
	session_id=user['idToken']
	request.session['uid']=str(session_id)
	return render(request,'welcome.html',{"e":email})

def signUp(request):
	return render(request,"signUp.html")

def logout(request):
	auth.logout(request)
	return render(request,'home.html')

def postSignUp(request):
	name = request.POST.get('name') 
	email = request.POST.get('email') 
	passw = request.POST.get('pass') 
	ethnic = request.POST.get('ethnic') 
	dob = request.POST.get('birth')
	try:	
		user= authe.create_user_with_email_and_password(email,passw)
		
	except:
		message="Sign up failed, email already exists"
		return render(request,"signUp.html",{"mesg":message})
	uid = user['localId']
	data = {"name":name, "status":"1","ethnicity":ethnic,"DoB":dob}

	database.child("users").child(uid).child("details").set(data)
	return render(request,"home.html")