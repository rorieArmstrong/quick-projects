import { auth } from 'firebase';
import React from 'react';

function SignOut(props) {
    return props.auth.currentUser && (
        <div>
            <button onClick={() => props.auth.signOut()}>
                Sign Out
            </button>
        </div>
    );
}

export default SignOut;