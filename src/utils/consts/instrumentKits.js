export const HEATER_KIT = 'Heater Kit'
export const SMOOTH_PIANO_KIT = 'Smooth Piano Kit'

function Sound(name, src) {
    this.name = name
    this.src = src
}

const instrumentKits = {
    [HEATER_KIT]: [
        new Sound('Heater 1', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'),
        new Sound('Heater 2', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'),
        new Sound('Heater 3', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'),
        new Sound('Heater 4', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'),
        new Sound('Clap', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'),
        new Sound('Open HH', 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'),
        new Sound('Kick n\' Hat', 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'),
        new Sound('Kick', 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'),
        new Sound('Closed HH', 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3')
    ],
    [SMOOTH_PIANO_KIT]: [
        new Sound('Chord 1', 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'),
        new Sound('Chord 2', 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'),
        new Sound('Chord 3', 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'),
        new Sound('Shaker', 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'),
        new Sound('Open HH', 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'),
        new Sound('Closed HH', 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'),
        new Sound('Punchy Kick', 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'),
        new Sound('Side Stick', 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'),
        new Sound('Snare', 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3')
    ]
}

export default instrumentKits
