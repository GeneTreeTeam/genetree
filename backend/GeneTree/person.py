import datetime
import time
import json

class Person():
	userData = {
	'name':"",
	'father': None,
	'mother': None,
	'dob': None,
	'comment':[],
	'isAccount': False,
	'children':[],
	'uniqueId': 0,
	'gender':"",
	'matchmaker': None,
	}

	def assignGender(self, gender):
		self.userData['gender'] = gender

	def assignName(self,nameNew):
		self.userData['name'] = nameNew

	def assignFather(self,fatherNew):
		self.userData['father'] = fatherNew

	def assignMother(self,motherNew):
		self.userData['mother'] = motherNew
	
	def removeFather(self,fatherNew):
		self.userData['father'] = None

	def removeMother(self,motherNew):
		self.userData['mother'] = None
	
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

	def marriage(self, differentPerson):
		

if __name__ == "__main__":
	person1 = Person()
	person2 = Person()
	person3 = Person()
	person1.assignName("Betty")
	person2.assignName("Martha")
	person3.assignName("Bill")
	person1.assignMother(person2)
	person1.assignFather(person3)
	print(person1.eldest())
	