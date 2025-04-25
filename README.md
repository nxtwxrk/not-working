Spotify Listening Token System
The entered token will always return to the same channel, even if you change channels or restart it. To change it, you only need to transfer it through the server. The website version will be shared shortly, and once the YouTube video is published, it will be available for others to watch.

You need to edit the "settings.json" file.

Each token listens to a random song, and the song data is fetched from Spotify. They don't listen to the same song; when a song finishes, it automatically switches to a different one. You can edit the song data in ./Spotify/Data.json.



Modules Installation:
To get started, you’ll need to install the required modules using npm. Run the following commands:


npm install
npm install discord.js-selfbot-v13@latest
npm install @discordjs/voice
Starting the Application:

Once the modules are installed, you can start the application by running:

node index.js


discord:blessurgod

