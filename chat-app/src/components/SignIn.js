import React from 'react';
import 'firebase.auth'

function SignIn(props) {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        props.auth.signInWithPopup(provider)
    }
    
    return (
        <div>
            <button onClick={signInWithGoogle}>
                Sign in with Gooogle
            </button>
        </div>
    );
}

export default SignIn;