import json
import pyrebase

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
database=firebase.database() #database=firebase.database().ref(config.databaseURL)

data =  '''{"firstname":"John", "lastname":"Silver",
    "Mother":{"firstname":"Maria", "lastname":"Silver"},
    "Father":{"firstname":"Kurt", "lastname":"Silver"},
    "Childern":[{"firstname":"Martin", "lastname":"Silver"},
    {"firstname":"Martha", "lastname":"Silver"}]}'''

# y = {                               #Dict
#   "name": "John",
#   "age": 30,
#   "city": "New York"
# }

#TODO: Use .dumps to convert to JSON
#TODO: Write to database
#TODO: Read from database

def findEntryDB(request):
    all_users = database.child("users")
    search = request.POST.get('email')
    for uid in all_users.shallow().get().each():
        inventory = all_users.child(uid).child("details").get()
        if(search == inventory)

def newEntryDB(request): #Add new non-existing users
    # passw = request.POST.get('pass')
    # email = request.POST.get('email')
    email = "email@gmail.com"
    passw = "john123"

    try:
        user= authe.create_user_with_email_and_password(email,passw) #TODO: check firebase if user already exist
    except:
        message="Entry exists"

    uid = user['localId']
    database.child("users").child(uid).set(data)
    #TODO use actual data not existing json

def readDB(request): #assuming request has UID
    try:
        pInfo = database.get(request.POST.get('UID'))
    except:
        message="Database non-existant!"
        return render(request, 'home.html',{"mesg":message})

    return render()


#Uopdate existing user or Add new detail fields
# def updateDB(request):


# def deleteEntryDB(request):
