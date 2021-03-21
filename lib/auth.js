import React, { useState, useEffect, useContext, createContext } from 'react';
import Router from 'next/router';
import firebase from './firebase';
import { createUser } from './db';

const authContext = createContext();

export function AuthProvider({ children }) {
	const auth = useProvideAuth();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
	return useContext(authContext);
};

function useProvideAuth() {
	const [user, setUser] = useState(null);
	const handleUser = (rawUser) => {
		if (rawUser) {
			const user = formatUser(rawUser);
			createUser(user.uid, user);
			setUser(user);
			return user;
		} else {
			setUser(false);
			return false;
		}
	};

	const signinWithGoogle = (redirect) => {
		return firebase
			.auth()
			.signInWithPopup(new firebase.auth.GoogleAuthProvider())
			.then((response) => {
				// console.log('before sign with google then statement');
				handleUser(response.user);
				// console.log('after sign with google then statement');
				if (redirect) {
					Router.push(redirect);
				}
			});
	};

	const signout = (redirect) => {
		return firebase
			.auth()
			.signOut()
			.then(() => {
				handleUser(false);
				if (redirect) {
					Router.push(redirect);
				}
			});
	};

	useEffect(() => {
		// const unsubscribe = firebase.auth().onAuthStateChanged(() => {
		// 	console.log('called');
		// 	handleUser;
		// });
		// return () => unsubscribe();
	}, []);

	return {
		user,
		signinWithGoogle,
		signout,
	};
}

const formatUser = (user) => {
	return {
		uid: user.uid,
		email: user.email,
		name: user.displayName,
		provider: user.providerData[0].providerId,
		photoUrl: user.photoURL,
	};
};
