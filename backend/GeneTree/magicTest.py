from magic import *
class magicTest:
	if __name__ == "__main__":
		logged = False
		user = None 
		mail = ""
		passw = "" 
		currentHash = None
		count = 0
		peoples = {}
		while(True):
			if logged is False:
				blah = input("Hello would you like to login or sign up today? \n L to Login \n S to Sign Up\n")
				if blah.lower() == 'l':
					mail = input("Enter your email\n")
					passw = input("Enter your password\n")
					if postSign(mail,passw) is True:
						logged = True
						user= authe.sign_in_with_email_and_password(mail,passw)
					else:
						print("Entered incorrected information or account does not exist\n")
				elif blah.lower() == 's':
					name = input("Enter your name\n")
					mail = input("Enter your email\n")
					passw = input("Enter your password\n")
					gender = input("Enter your gender\n")
					postSignUp(name,mail,passw,gender)
					currentHash = hash(name) + hash(gender)
			else:
				while(True):
					name = getName(mail,passw)
					user= authe.sign_in_with_email_and_password(mail,passw)
					if len(peoples) == 0:
						peoples[count] = name
					if currentHash is None:
						currentHash = 0
					#name1,id2 = getInfo(user)
					#mainHash = hash(name1) + hash(id2)
					#print(id2)
					eh = input("Hello " + name + "! You may do the following: \n Add a mother [M] \n Add a father [F] \n Print tree [P] \n View Nodes [V] \n")
					if eh.lower() == 'm':
						nameMom = input('What is the name of the Mother?\n')
						count +=1
						assignMother(user,currentHash, nameMom)
						peoples[count] = nameMom
					elif eh.lower() == 'f':
						nameDad = input('What is the name of the Father?\n')
						count += 1
						assignFather(user,currentHash, nameDad)
						peoples[count] = nameDad
					elif eh.lower() == 'v':
						for key,value in peoples.items():
							print(key +  " " + value)
					elif eh.lower() == 'p':
						displayAll(user,currentHash)

					