import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyCc02rqQN4UgnYA8KQm_eEYIdCcqDE4rpw",
    authDomain: "react-store-40571.firebaseapp.com",
    databaseURL: "https://react-store-40571.firebaseio.com",
    projectId: "react-store-40571",
    storageBucket: "react-store-40571.appspot.com",
    messagingSenderId: "1017845599209"
  };

  const github = new firebase.auth.GithubAuthProvider();
github.addScope('user:email');
const facebook = new firebase.auth.FacebookAuthProvider();

try {
    firebase.initializeApp(config);
} catch (e) {
    console.error('Error initializing firebase — check your source code');
    console.error(e);
}

export const provider = firebase.auth();


export function logUserOut() {
    return firebase.auth().signOut();
}

/**
 * Logs the user in with email and apss
 * @method signInWithEmailAndPassword
 * 
 */
export function signInWithEmailAndPassword(email,pass) {
    return firebase.auth().signInWithEmailAndPassword(email,pass)
}

// create user 

export function createUser(email,pass){
    return firebase.auth().createUserWithEmailAndPassword(email,pass);
}

/**
 * Logs the user in with Github
 * @method loginWithGithub
 * 
 */
export function loginWithGithub() {
    return firebase.auth().signInWithPopup(github);
}

/**
 * Logs the user in with Facebook
 * @method loginWithFacebook
 * 
 */
export function loginWithFacebook() {
    return firebase.auth().signInWithPopup(facebook);
}

/**
 * Gets the user, if any, from Firebase
 * @method getFirebaseUser
 * 
 */
export function getFirebaseUser() {
    return firebase.auth().onAuthStateChanged(user=>{if(user){return user}});
}

/**
 * Gets the token from firebase
 * @method getFirebaseToken
 * 
 */
export function getFirebaseToken() {
    const currentUser = firebase.auth().currentUser;
    if (!currentUser) {
        return Promise.resolve(null);
    }
    return currentUser.getIdToken(true);
}