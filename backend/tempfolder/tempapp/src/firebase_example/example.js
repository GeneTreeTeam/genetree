import {people} from '../../backend/firebase_example'
import { signUp, read } from '../../backend/firebase_example/people';

        //create user or get existing user
signUp("jay", "email@gmail.com", "genetree1!")
    
read("any@gmail.com")
