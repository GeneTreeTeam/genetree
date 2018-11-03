.import datetime
import time
import json
import jsonpickle
from familyNode import family 
from datetime import timedelta
from datetime import datetime
import random
class Person():
	def __init__(self):
		self.userData = {
		'name':"",
		'surname':"",
		'father': None,
		'hasMom': 0,
		'hasDad': 0,
		'mother': None,
		'dob': None,
		'comment':[],
		'isAccount': False,
		'children':[],
		'uniqueId': random.choice(range(1, 100)),
		'gender':0, ### 0 is Male, 1 is Female
#		'matchmaker': None,
		'ethnicity':"",
		'birthdate':"",
		'sibling': [],
		'status': 0,
		}

 
		year = random.choice(range(1950, 2001))
		month = random.choice(range(1, 13))
		day = random.choice(range(1, 29))
		self.userData['dob'] = datetime(year, month, day)
		self.userData['birthdate'] = str(day) + "/" + str(month) + "/" + str(year)
	def getName(self):
		return self.userData['name']
	def getSurname(self):
		return self.userData['surname']
	def getMom(self):
		return self.userData['mother']

	def getDad(self):
		return self.userData['father']

	def getDoB(self):
		return self.userData['dob']

	def addSibling(self,sibling):
		dad = self.getDad()
		mom = self.getMom()
		sibling.assignFather(dad)
		sibling.assignMother(mom)
		self.userData['sibling'].append(sibling)
		sibling.userData['sibling'].append(self)

	def assignGender(self, gender):
		self.userData['gender'] = gender

	def assignName(self,nameNew):
		self.userData['name'] = nameNew

	def assignsurName(self,surnameNew):
		self.userData['surname'] = surnameNew

	def assignFather(self,fatherNew):
		self.userData['father'] = fatherNew
		self.userData['hasDad'] = 1
		fatherNew.addChild(self)

	def assignMother(self,motherNew):
		self.userData['mother'] = motherNew
		self.userData['hasMom'] = 1
		motherNew.addChild(self)
	
	def removeFather(self,fatherNew):
		self.userData['father'] = None
		fatherNew.removeChild()

	def removeMother(self,motherNew):
		self.userData['mother'] = None
		motherNew.removeChild()
	
	def dobAssign(self,dobNew):
		self.userData['dob'] = dobNew

	def eldest(self):
		if self.hasFather is False and self.hasMother is False:
			return True
		else:
			return False

	def hasFather(self):
		if self.userData['father'] is None:
			return False
		else:
			return True

	def assignId(self,newValue):
		self.userData['uniqueId'] = newValue

	def hasMother(self):
		if self.userData['mother'] is None:
			return False
		else:
			return True

	def addComment(self,commentNew):
		self.userData['comment'].append(commentNew)

	def displaySiblings(self):
#		print(self.hasFather()) #Get the list of children for both parents b4 recursion, perform a set.
#		print(self.hasMother()) # To prevent duplicates, check the 

		siblings = set()
		siblings.add(self)
		parents = ""
		connection = ""
		if self.hasFather() is True:
			dad = self.userData['father']
			dadsKids = dad.userData['children']
			for item in dadsKids:
					siblings.add(item)
			
#			print("Father of " + self.userData['name'] + " is " + str(dad))

		if self.hasMother() is True:
			mom = self.userData['mother']
			momsKids = mom.userData['children']
			for item in momsKids:
					siblings.add(item)
			
#			print("Mother of " + self.userData['name'] + " is " + str(mom))
#		if self.hasFather() is False and self.hasMother() is False:
#			print("Why")
#			print(str(self) + " has no parents.")
		if self.hasFather() is True:
			dad.displaySiblings()
			parents += dad.userData['name']
		if self.hasMother() is True:
			mom.displaySiblings()
			if self.hasFather() is True:
				parents += " and " + mom.userData['name']
				connection = " have the following children: "
			else:
				parents += mom.userData['name']
				connection = " has the following children: "
		else:
			connection = " has the following children: "
		if self.hasFather() is False and self.hasMother() is False:
			print(str(self) + " has no parents.")
		else:
			print(parents + connection)
			for item in siblings:
				print('\t' + item.userData['name'])
		print()

	def __str__(self):
		return self.userData['name'] + " " + self.userData['dob'].strftime('%m/%d/%Y') + " " + str(self.userData['uniqueId'])
#	def marriage(self, differentPerson):
#		newFam = family(self,differentPerson)
#		for child in self.userData['children']:
#			newFam.addChildren(child)
#		for child in differentPerson.userData['children']:
#			newFam.addChildren(child)
#		self.userData['matchmaker'] = newFam
#		differentPerson.userData['matchmaker'] = newFam


	def addChild(self,newKid):
		self.userData['children'].append(newKid)
			
	def removeChild(self,newKid):	
		self.userData['children'].remove(newKid)
#	def showKids(self):
#		if self.userData['matchmaker'] is None:
#			### DO SOME FUNCTION CALL HERE TO DISPLAY THE CHILDREN IN A SINGLE NODE aka the self.userData['children']
#			for name in self.userData['children']:
#				print(name.userData['name'])
#		else:
#			self.userData['matchmaker'].displayKids()
	def __hash__(self):
		hashIt= hash(self.userData['gender']) + hash(self.userData['name']) + hash(self.userData['dob']) + hash(self.userData['uniqueId'])
		return hashIt

	def __eq__(self, other):
		return hash(self) == hash(other)

	def __ne__(self, other):
		return not self == other # NOT `return not self.__eq__(other)`
	def toJSON(self): 
		return json.dumps(json.loads(jsonpickle.encode(self)),indent=4)

