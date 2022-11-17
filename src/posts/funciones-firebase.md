---
title: Funciones en Firebase
slug: funciones-firebase
date: '2022-11-10'
updated: null
published: false
description: '...'
terms:
    - firebase
---


https://firebase.google.com/docs/functions/local-emulator
https://www.thisdot.co/blog/going-serverless-with-vue-js-and-firebase-cloud-functions
https://firebase.blog/posts/2017/09/testing-functions-locally-with-cloud

https://stackoverflow.com/questions/53677153/is-it-possible-to-login-as-another-user-in-firebase

```sh
firebase deploy --only functions

firebase experimental:functions:shell

# NUTR
  functions.useFunctionsEmulator(`http://localhost:${firebaseConfig.emulators.functions.port}`);

```
