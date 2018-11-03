
class family():

	def __init__(self, mother, father):
		self.mother = mother
		self.father = father
		self.printed = False
		self.children = set()	
		self.printed = False
	def addChildren(self, child):
		self.children.add(child)

	def whoIsMom(self):
		return self.mother

	def whoIsDad(self):
		return self.father

	def whoTheKids(self):
		return self.children

	def displayKids(self):
		if self.printed is False:
			for child in self.children:
				print("Married " + child.userData['name'] )
			self.printed = True
		else:
			self.printed = False