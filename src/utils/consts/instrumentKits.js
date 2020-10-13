export const HEATER_KIT = 'Heater Kit'
export const SMOOTH_PIANO_KIT = 'Smooth Piano Kit'
const instrumentKits = { // TO DO: Replace plain objects with constructor functions instances
    [HEATER_KIT]: [
        {
            name: 'Heater 1',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
        },
        {
            name: 'Heater 2',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
        },
        {
            name: 'Heater 3',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
        },
        {
            name: 'Heater 4',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
        },
        {
            name: 'Clap',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
        },
        {
            name: 'Open HH',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
        },
        {
            name: 'Kick n\' Hat',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
        },
        {
            name: 'Kick',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
        },
        {
            name: 'Closed HH',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        }
    ],
    [SMOOTH_PIANO_KIT]: [
        {
            name: 'Chord 1',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
        },
        {
            name: 'Chord 2',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
        },
        {
            name: 'Chord 3',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
        },
        {
            name: 'Shaker',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
        },
        {
            name: 'Open HH',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
        },
        {
            name: 'Closed HH',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
        },
        {
            name: 'Punchy Kick',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
        },
        {
            name: 'Side Stick',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
        },
        {
            name: 'Snare',
            src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
        }
    ]
}

export default instrumentKits
