# import datetime
# import time
# import json
# from familyNode import family 
# from datetime import timedelta
# from datetime import datetime
# import random
# class Person():
# 	def __init__(self):
# 		self.userData = {
# 		'name':"",
# 		'surname':"",
# 		'father': None,
# 		'mother': None,
# 		'dob': None,
# 		'comment':[],
# 		'isAccount': False,
# #		'children':[],
# 		'uniqueId': random.choice(range(1, 100)),
# 		'gender':0, ### 0 is Male, 1 is Female #Change to M and F
# #		'matchmaker': None,
# 		'ethnicity':"",
# 		}

 
# 		year = random.choice(range(1950, 2001))
# 		month = random.choice(range(1, 13))
# 		day = random.choice(range(1, 29))
# 		self.userData['dob'] = datetime(year, month, day)
		
# 	def getName(self):
# 		return self.userData['name']
# 	def getSurname(self):
# 		return self.userData['surname']
# 	def getMom(self):
# 		return self.userData['mother']

# 	def getDad(self):
# 		return self.userData['father']

# 	def getDoB(self):
# 		return self.userData['dob']

# 	def assignGender(self, gender):
# 		self.userData['gender'] = gender

# 	def assignName(self,nameNew):
# 		self.userData['name'] = nameNew

# 	def assignsurName(self,surnameNew):
# 		self.userData['surname'] = surnameNew

# 	def assignFather(self,fatherNew):
# 		self.userData['father'] = fatherNew
# 		#fatherNew.addChild(self)

# 	def assignMother(self,motherNew):
# 		self.userData['mother'] = motherNew
# 		#motherNew.addChild(self)
	
# 	def removeFather(self,fatherNew):
# 		self.userData['father'] = None

# 	def removeMother(self,motherNew):
# 		self.userData['mother'] = None
	
# 	def dobAssign(self,dobNew):
# 		self.userData['dob'] = dobNew

# 	def eldest(self):
# 		if self.hasFather is False and self.hasMother is False:
# 			return True
# 		else:
# 			return False

# 	def hasFather(self):
# 		if self.userData['father'] is None:
# 			return False
# 		else:
# 			return True

# 	def assignId(self,newValue):
# 		self.userData['uniqueId'] = newValue

# 	def hasMother(self):
# 		if self.userData['mother'] is None:
# 			return False
# 		else:
# 			return True

# 	def addComment(self,commentNew):
# 		self.userData['comment'].append(commentNew)

# 	def displaySiblings(self):
# 		print("hello")
# 		print(self.hasFather())
# 		print(self.hasMother())
# 		#siblings = set()
# 		if self.hasFather() is True:
# 			dad = self.userData['father']
# 		#	dadsKids = dad.userData['children']
# 			#for item in dadsKids:
# 			#siblings.add(dad)
# 			dad.displaySiblings()
# 			print("Father of " + self.userData['name'] + " is " + str(dad))

# 		if self.hasMother() is True:
# 			mom = self.userData['mother']
# 			#momsKids = mom.userData['children']
# #			for item in momsKids:
# 	#		siblings.add(mom)
# 			mom.displaySiblings()
# 			print("Mother of " + self.userData['name'] + " is " + str(mom))
# 		if self.hasFather() is False and self.hasMother() is False:
# 			print("Why")
# 			print(str(self) + " has no parents.")
# #		if len(siblings) == 0:
# #			print(str(self) + "'s parents are non existent")
# #		else:
# #			print(str(self) + "'s parents are", end=" ")
# #			for item in siblings:
# #				print(item, end=" ")
# #		print()

# 	def __str__(self):
# 		return self.userData['name'] + " " + self.userData['dob'].strftime('%m/%d/%Y') + " " + str(self.userData['uniqueId'])
# #	def marriage(self, differentPerson):
# #		newFam = family(self,differentPerson)
# #		for child in self.userData['children']:
# #			newFam.addChildren(child)
# #		for child in differentPerson.userData['children']:
# #			newFam.addChildren(child)
# #		self.userData['matchmaker'] = newFam
# #		differentPerson.userData['matchmaker'] = newFam


# #	def addChild(self,newKid):
# #		if self.userData['matchmaker'] is None:
# #			self.userData['children'].append(newKid)
# #		else:
# #			self.userData['matchmaker'].addChildren(newKid)

# #	def showKids(self):
# #		if self.userData['matchmaker'] is None:
# #			### DO SOME FUNCTION CALL HERE TO DISPLAY THE CHILDREN IN A SINGLE NODE aka the self.userData['children']
# #			for name in self.userData['children']:
# #				print(name.userData['name'])
# #		else:
# #			self.userData['matchmaker'].displayKids()
# 	def __hash__(self):
# 		hashIt= hash(self.userData['gender']) + hash(self.userData['name']) + hash(self.userData['dob']) + hash(self.userData['uniqueId'])
# 		return hashIt

# 	def __eq__(self, other):
# 		return hash(self.userData) == hash(other.userData)

# 	def __ne__(self, other):
# 		return not self == other # NOT `return not self.__eq__(other)`

