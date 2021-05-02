Music Player Application:
1. music-player-app-ui is the Angular project added for this application.
2. music-player-app is the spring boot backend code added for this application.

Steps to run Project:
1. To set up the backend code download the music-player-app folder.(or you could clone the entire repo)
2. Import the project as maven project in the eclipse(spring tool suite)
3. Add the external jars provided in the jar_files folder
4. Create a database in Mysql workbench and give the same name in the datasource url present in the application.properties file
5. Run the project
6. You can check the working of the APIs in postman also.
7. To set the UI code download the music-player-app-ui folder.
8. Open it in Visual Studio Code.
9. If you don't have angular setup follow the instruction from - https://angular.io/guide/setup-local
10. Under the project directory Run the command "npm install" to install all the required dependencies.
11. Run the command "ng serve" to run the angular application.
12. On localhost:4200 you will be able to see the running application.

- Following operations are present in this application:
1. Add a playlist
2. Delete a playlist
3. Add a song to the existing playlist.
3. Delete a song from the existing playlist.
5. View the existing playlists.
