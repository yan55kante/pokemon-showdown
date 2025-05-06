// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [
  {
    name: "[Gen 4] Nacho Cuernoo - Batalla 2v2",
    desc: ["Batalla 2v2, cada jugador tiene 3 Pokémon. El equipo está formado por dos jugadores (3 Pokémon cada uno)."],
    mod: 'gen4',  // Usamos la generación 4
    ruleset: ['Team Preview', 'Sleep Clause Mod', 'Doubles', 'Species Clause'],  // Reglas de dobles y team preview
    banlist: [],  // Sin baneos
    teamLength: {
      validate: [6, 6],  // 6 Pokémon en total, 3 por jugador
      battle: 6,  // 6 Pokémon en batalla (3 por cada jugador)
    },
    format: '2v2',  // Especificamos que es un formato de dobles
    rated: false,  // Puedes ponerlo en "false" si no quieres que cuente para el ladder
    customRules: {
      playersPerTeam: 2,  // 2 jugadores por equipo
      pokemonPerPlayer: 3,  // Cada jugador controla 3 Pokémon
    },
  },
];