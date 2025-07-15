const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signIn() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email, pass)
        .then(() => alert("Đăng nhập thành công"))
        .catch(err => showError(err.message));
}

function signUp() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    auth.createUserWithEmailAndPassword(email, pass)
        .then(() => alert("Tạo tài khoản thành công"))
        .catch(err => showError(err.message));
}

function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(() => alert("Đăng nhập Google thành công"))
        .catch(err => showError(err.message));
    }

function signInWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider)
        .then(() => alert("Đăng nhập Facebook thành công"))
        .catch(err => showError(err.message));
}

function logout() {
    auth.signOut()
        .then(() => alert("Đã đăng xuất"));
}

function showError(msg) {
    document.getElementById("auth-msg").textContent = msg;
}
