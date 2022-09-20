# noKey - A keyless access system (Proto)
## Currently very early work in progress
For more information about setup refer to [API](https://github.com/kristjan80/noKey/tree/dev/api) or [client](https://github.com/kristjan80/noKey/tree/dev/client) Readme files 

# General concept
## Abstract

The idea of a solution is to build a backend API and a web/user frontend for administrators. Users can log in to the application and use the generated QR code for access to different rooms that have scanners set up near the doors. Administrator can view devices, their location, where users are in the building and manage their access privileges.

## Functional requirements
Users can request an account or Administrator can make one for them

They can log in to the application that gives them the access code (Maybe add two factor auth aswell?)

Application in proto will be a website but maybe if there is enough time, i´ll make a Java Android app aswell (no promises)

Administrator has admin panel where he can see devices, change access privileges, delete users etc

