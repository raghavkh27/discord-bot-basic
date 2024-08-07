const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith('create')) {
    const url = message.content.split('create')[1]; // Extract URL more effectively
    return message.reply({
      content: 'Generating Short ID for ' + url,
    });
  } else {
    message.reply({
      content: 'APKA SWAGAT HAI',
    });
  }
});

client.on('interactionCreate', (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    interaction.reply('Pong!');
  }
});

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
client.login(
  'MTI3MDcyNjU2MzQ2NTM5NjIyNA.GHID2O.MWZzWDfWT3-ghreMNiKguiDrwlacE_KMoHrACg'
);
