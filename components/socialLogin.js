import Auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { AccessToken, LoginManager, Settings } from 'react-native-fbsdk-next';
import { appleAuth } from '@invertase/react-native-apple-authentication';

GoogleSignin.configure({
    webClientId:
        '441081879061-h2hp1lsol5t6c4e0e9vv7j7uj0m706eh.apps.googleusercontent.com',
});

Settings.setAppID('412256831106653');

const Google = async () => {
    try {
        const userInfo = await GoogleSignin.signIn();
        const googleCredential = Auth.GoogleAuthProvider.credential(
            userInfo.idToken,
        );
        const userAuth = await Auth().signInWithCredential(googleCredential);
        
        const { uid, email ,displayName,photoURL,emailVerified } = userAuth.user._user;
        
        if(emailVerified === true){
            return { Id: uid,Email: email ,Name: displayName, Pic:photoURL }
        }
    } catch (error) {
        console.log(error);
    }
};

const Facebook = () => {
   return  LoginManager.logInWithPermissions(['public_profile'])
        .then(async login => {
            if (login.isCancelled) {
                return;
            } else {
                try {
                    const fbAuth = await AccessToken.getCurrentAccessToken();
                    const fbCredential = Auth.FacebookAuthProvider.credential(
                        fbAuth.accessToken,
                    );
                    const userAuth = await Auth().signInWithCredential(fbCredential);
                    const { uid, providerData,displayName,photoURL,emailVerified } = userAuth?.user?._user;
                    return { Id: uid,Email : providerData[0].providerId ,Name: displayName, Pic:photoURL , status:emailVerified };
                } catch (error) {
                    console.log(error);
                }
            }
        })
        .catch((error)=> {
            console.log(error)
        })
};

const Apple = async type => {
    try {
        const appleAuthRequestResponse = await appleAuth.performRequest({
            requestedOperation: appleAuth.Operation.LOGIN,
            requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        });
        const { identityToken, nonce } = appleAuthRequestResponse;
        const appleCredential = Auth?.AppleAuthProvider?.credential(
            identityToken,
            nonce,
        );
        const userAuth = await Auth()?.signInWithCredential(appleCredential);
        const { uid, email } = userAuth?.user;
        console.log('userAuth', userAuth);
    } catch (error) {
        console.log(error);
    }
};

export default { Google, Apple, Facebook };
