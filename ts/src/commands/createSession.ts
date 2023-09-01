const { SlashCommandBuilder } = require("discord.js");
let url = "";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("createsession")
    .setDescription(`Creates a new music session!`),
  async execute(interaction: any) {
    await interaction.reply(`A new music session was created on URL ${url}`);
  },
};
