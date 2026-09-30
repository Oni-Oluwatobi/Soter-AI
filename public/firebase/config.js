// Firebase Configuration for Soter AI Parent Voice Study
// NOTE: In production, use environment variables for Firebase credentials
// Never hardcode private credentials in client-side code

// To initialize Firebase, replace with your project configuration:
// const firebaseConfig = {
//   apiKey: "your-api-key",
//   authDomain: "your-project-id.firebaseapp.com",
//   projectId: "your-project-id",
//   storageBucket: "your-project-id.appspot.com",
//   messagingSenderId: "your-sender-id",
//   appId: "your-app-id"
// };

// export { initializeApp } from "firebase/app";
// export { getFirestore } from "firebase/firestore";

// App Check setup (to be configured when credentials are available)
// import { initializeAppCheck } from "firebase/app-check";
// import { ReCaptchaV3Provider, getAppCheck } from "firebase/app-check";

// const appCheck = initializeAppCheck(
//   initializeApp(firebaseConfig),
//   { provider: new ReCaptchaV3Provider("your-site-key") }
// );

export { surveyData, submitToFirestore };