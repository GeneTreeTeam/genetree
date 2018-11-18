import datetime
import time
import json
import jsonpickle
from datetime import timedelta
from datetime import datetime
import random
from django.views.generic import ListView
from django.shortcuts import render
import pyrebase
from django.contrib import auth
from ast import literal_eval
#from . import person
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

def postSign(email, pass1):
	email = email
	passw = pass1
	try:
		user= authe.sign_in_with_email_and_password(email,passw)
	except:
		message="Sign in failed, please check email and password"
		print(message)
		return False
	print("Sign in Successful")
	return True

def forget(request):
	return render(request,"forgot.html")

def logout(request):
	auth.logout(request)
	return render(request,'home.html')
def getName(login,password):
	# Log the user in
	user = authe.sign_in_with_email_and_password(login,password)
	uid = user['localId']
	# Refresh token as it can expire after 1 hour
	user = authe.refresh(user['refreshToken'])
	# now we have a fresh token
	
	blah = database.child("users").child(uid).child(0).get()

	#print(len(blah.each()))
	#print(str(uid))
	for user in blah.each(): 
	#	print(user.key())
	#	print(user.val())
		
		if str(user.key()) == "name":
	#		print("Hello" + user.key()) # Morty 
	#		print(user.val()) # {name": "Mortimer 'Morty' Smith"}
	#		print(type(user.val()))
			blah = str(user.val())
			pos = blah.find('{')
			blah2 = blah[pos:blah.rfind('}')+1]
	#		print("blah 2" + blah2)
			dict2 = literal_eval(blah2)
			#print(len(dict2))
			return list(dict2.values())[0]
def getInfo(user):
	# Log the user in
	uid = user['localId']
	# Refresh token as it can expire after 1 hour
	user = authe.refresh(user['refreshToken'])
	# now we have a fresh token
	
	blah = database.child("users").child(uid).get()
	for user in blah.each(): 
		print
		if str(user.key()) == str(0):
	#		print("Hello" + str(user.key())) # Morty 
	#		print(user.val()) # {name": "Mortimer 'Morty' Smith"}
	#		print(type(user.val()))
			blah = str(user.val())
			pos = blah.find('{')
			blah2 = blah[pos:blah.rfind('}')+1]
	#		print("blah 2" + blah2)
			dict2 = literal_eval(blah2)
			#print(len(dict2))
			return dict2['name'],dict2['gender']
def displayAll(user,currentHash):
	uid = user['localId']
	oof = database.child("users").child(uid).child(currentHash).get()
	for user in oof.each(): 
		print("THIS IS A SEPARATE NODE")
		print("key " + str(user.key()))
		print("value " + str(user.val()))
def assignFather(user,currentHash,dadName):
	uid = user['localId']
	# Refresh token as it can expire after 1 hour
	#user = authe.refresh(user['refreshToken'])
	# now we have a fresh token
	
	blah = len(database.child("users").child(uid).get().each())
	print(str())
	#myName,gender1 = getInfo(user)
	#print(myName + " HELLO " + gender1)
	#originId = hash(str(myName)) + hash(str(gender1))
	ide = hash(dadName) + hash("male")
	tree = {}
	tree['hid'] = ide
	data = {"name":dadName,"gender": "male","id":blah}
	relation = {"father": blah}
	for item, item2 in data.items():
		database.child("users").child(uid).child(blah).child(str(item)).push(str(item2))
	database.child("users").child(uid).child(currentHash).update(relation)
def assignMother(user,currentHash,dadName):
	uid = user['localId']
	# Refresh token as it can expire after 1 hour
	#user = authe.refresh(user['refreshToken'])
	# now we have a fresh token
	
	blah = len(database.child("users").child(uid).get().each())
	print(str())
	#myName,gender1 = getInfo(user)
	#print(myName + " HELLO " + gender1)
	#originId = hash(str(myName)) + hash(str(gender1))
	ide = hash(dadName) + hash("female")
	tree = {}
	tree['hid'] = ide
	data = {"name":dadName,"gender": "female","id":blah}
	relation = {"mother": blah}
	for item, item2 in data.items():
		database.child("users").child(uid).child(blah).child(str(item)).push(str(item2))
	database.child("users").child(uid).child(currentHash).update(relation)
def getRootHash(user):
	uid = user['localId']
	# Refresh token as it can expire after 1 hour
	user = authe.refresh(user['refreshToken'])
	# now we have a fresh token
	
	blah = database.child("users").child(uid).get()
def postSignUp(name,email,passW,gender):
	name = name
	email = email
	passw = passW
	gender = gender
	try:	
		user= authe.create_user_with_email_and_password(email,passw)
		
	except:
		message="Sign up failed, email already exists"
		print(message)
		return

	uid = user['localId']
	tree = {}
	hide = hash(name) + hash(gender)
	tree['hid'] = hide
	
	data = {"name":name, "tree":tree,"gender": gender, "id":0}
	for item, item2 in data.items():
		database.child("users").child(uid).child(0).child(str(item)).push(str(item2))
	print("Signed Up")

def recover(request):
	email = request.POST.get('email') 
	passw = "blank"
	try:
		user= authe.create_user_with_email_and_password(email,passw)
	except:
		message="Account does not, please check email"
		return render(request,'forgot.html',{"mesg":message})
