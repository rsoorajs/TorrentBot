module.exports = Object.freeze({
  TOKEN: '1243705125:AAFNuxqgjvMIHWIh4-aS-rnDDn25-fPAsHc',
  ARIA_SECRET: 'hasdhashdasndashdagnausdasmd',
  ARIA_DOWNLOAD_LOCATION: '/content',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: ['jizz', 'porn', 'cruzing.xyz', 'eztv.ap', 'porab'], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: ['TIFY'], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  GDRIVE_PARENT_DIR_ID: '1-0cmAPC9Qvsz0uR1aNqUsMyhwXsuwMPa',
  SUDO_USERS: [254210865, 1184227743, 556218472],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [254210865,1184227743, -1001345000208],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 12000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['someMail@gmail.com', 'someOtherMail@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: true,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@TorrentPadu_Bot"
  },
  IS_TEAM_DRIVE: false
});
