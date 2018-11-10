# from person import Person
# class TreeDisplay():
# 	if __name__ == "__main__":
# #		person1 = Person()
# #		person2 = Person()
# #		person3 = Person()
# #		person4 = Person()
# #		person5 = Person()
# #		person6 = Person()
# #		person7 = Person()
# #		person1.assignName("A")
# #		person2.assignName("B")
# #		person3.assignName("C")
# #		person4.assignName("D")
# #		person5.assignName("E")
# #		person6.assignName("F")
# #		person7.assignName("G")
# #		person1.assignFather(person2)
# #		person1.assignMother(person3)
# #		person2.assignFather(person4)
# #		person2.assignMother(person5)
# #		person3.assignFather(person6)
# #		person3.assignMother(person7)
# #		person1.displaySiblings()
# 		holder = {}
# 		selfNode = None
# 		counter = 0
# 		while(True):
# 			if selfNode is None:
# 				print("Please create a basis profile")
# 				name = input("Enter your first name. \n")
# 				while name == "":
# 					name = input("Enter your first name. \n")
# 				surname = input("Enter your last name. \n")
# 				while surname == "":
# 					surname = input("Enter your last name. \n")
# 				gender = input("What is your gender? M or F? \n")
# 				while (gender.upper() != "M" and gender.upper() != "F"):
# 					gender = input("Gender entered incorrectly. What is your gender? M or F? \n")
# 				selfNode = Person()
# 				selfNode.assignName(name)
# 				selfNode.assignsurName(surname)
# 				if gender.upper() is "M":
# 					selfNode.assignGender(0)
# 				else:
# 					selfNode.assignGender(1)
# 				holder[counter] = selfNode
# 				counter += 1
# 			else:
# 				inMe = input("Welcome! "+ selfNode.getName() + "! You can do the following: \n M - Add Mom \n D - Add Dad \n E - Edit Self (Does not work yet) \n P - Print Tree \n J - Move to Family Node \n L - List current Nodes \n Q - Quit \n")
# 				inMe = inMe.upper()
# 				if inMe == "M":
# 					momNode = Person() 
# 					name = input("Enter the mother's first name. \n")
# 					while name == "":
# 						name = input("Enter the mother's first name. \n")
# 					surname = input("Enter the mother's last name. \n")
# 					while surname == "":
# 						surname = input("Enter mother's last name. \n")
# 					momNode.assignName(name)
# 					momNode.assignsurName(surname)
# 					momNode.assignGender(1)
					
# 					holder[counter] = momNode
# 					selfNode.assignMother(momNode)
# 					counter += 1
# 				elif inMe == "D":
# 					dadNode = Person() 
# 					name = input("Enter the father's first name. \n")
# 					while name == "":
# 						name = input("Enter the father's first name. \n")
# 					surname = input("Enter the father's last name. \n")
# 					while surname == "":
# 						surname = input("Enter father's last name. \n")
# 					dadNode.assignName(name)
# 					dadNode.assignsurName(surname)
# 					dadNode.assignGender(0)
# 					holder[counter] = dadNode
# 					selfNode.assignFather(dadNode)
# 					counter += 1
# 				elif inMe == "E":
# 					print("You can change the following parameters: Your first name, last name, birthdate, gender, remove any parent, ethnicity")
# 				elif inMe == "P":
# 					print("The following is the ancestral tree for the current unit \n")
# 					selfNode.displaySiblings()
# 				elif inMe == "J":
# 					print("Options:", end="")
# 					for position, node in holder.items():
# 						print(str(position), end=", ")
# 					print('\n')
# 					jumpLocation = input("Enter the node number/position you wish to jump to. \n")
					
# 					while jumpLocation.isdigit() is False or int(jumpLocation) >= counter:
# 						jumpLocation = input("Incorrect input. Enter the node number you wish to jump to.  \n")
# 						print("Options:", end="")
# 						for position, node in holder.items():
# 							print(str(position), end=", ")
# 						print('\n')
# 					selfNode = holder[int(jumpLocation)]
# 					print("Jumped to " + selfNode.getName())
# 				elif inMe == "L":
# 					print("These are the current nodes.")
# 					for position, node in holder.items():
# 						print(str(position) + " " + node.getName() + " " +node.getSurname())
# 				elif inMe == "Q":
# 					break

	
