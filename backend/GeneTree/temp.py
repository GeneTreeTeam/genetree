##import pyrebase config = {  "apiKey": "AIzaSyBMVKmYH4nxqRTahVl-_M1INoiG-4abL-E",  "authDomain": "genetree-54b3b.firebaseapp.com",  "databaseURL": "https://genetree-54b3b.firebaseio.com",  "storageBucket": "genetree-54b3b.appspot.com",  "messagingSenderId": "865253565447" } firebase = pyrebase.initialize_app(config)

#auth = firebase.auth() #authenticate a user user = auth.sign_in_with_email_and_password("william@hackbrightacademy.com", "mySuperStrongPassword")
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Copyright (C) 2013 Adrien Vergé
#Single Gold Star

#Family Trees

#In the lecture, we showed a recursive definition for your ancestors. For this
#question, your goal is to define a procedure that finds someone's ancestors,
#given a Dictionary that provides the parent relationships.

#Here's an example of an input Dictionary: 

ada_family = { 'Judith Blunt-Lytton': ['Anne Isabella Blunt', 'Wilfrid Scawen Blunt'], 
              'Ada King-Milbanke': ['Ralph King-Milbanke', 'Fanny Heriot'], 
              'Ralph King-Milbanke': ['Augusta Ada King', 'William King-Noel'], 
              'Anne Isabella Blunt': ['Augusta Ada King', 'William King-Noel'], 
              'Byron King-Noel': ['Augusta Ada King', 'William King-Noel'], 
              'Augusta Ada King': ['Anne Isabella Milbanke', 'George Gordon Byron'], 
              'George Gordon Byron': ['Catherine Gordon', 'Captain John Byron'], 
              'John Byron': ['Vice-Admiral John Byron', 'Sophia Trevannion'] } 

#Define a procedure, ancestors(genealogy, person), that takes as its first input
#a Dictionary in the form given above, and as its second in put the name of a
#person. It should return a list giving all the known ancestors of the input
#person (this should be the empty list if there are none). The order of the list
#does not matter and duplicates will be ignored.
 
def ancestors(genealogy, person):
	if person in genealogy:
		parents = genealogy[person]
		result = parents
		for parent in parents:
			result = result + ancestors(genealogy,parent)
		return result
	return []






#Here are some examples:

print(ancestors(ada_family, 'Augusta Ada King'))
#>>> ['Anne Isabella Milbanke', 'George Gordon Byron', 
#    'Catherine Gordon','Captain John Byron']

print(ancestors(ada_family, 'Judith Blunt-Lytton'))
#>>> ['Anne Isabella Blunt', 'Wilfrid Scawen Blunt', 'Augusta Ada King', 
#    'William King-Noel', 'Anne Isabella Milbanke', 'George Gordon Byron', 
#    'Catherine Gordon', 'Captain John Byron']

print(ancestors(ada_family, 'Dave'))
#>>> []
