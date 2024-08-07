const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'create',
    description: ' create a shortened url!',
  },
];

const rest = new REST({ version: '10' }).setToken(
  'MTI3MDcyNjU2MzQ2NTM5NjIyNA.GHID2O.MWZzWDfWT3-ghreMNiKguiDrwlacE_KMoHrACg'
);
(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands('1270726563465396224'), {
      body: commands,
    });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
