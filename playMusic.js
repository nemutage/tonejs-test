const piano = new Tone.Sampler({
    "A0": "A0.mp3",
    "A1": "A1.mp3",
    "A2": "A2.mp3",
    "A3": "A3.mp3",
    "A4": "A4.mp3",
    "A5": "A5.mp3",
    "A6": "A6.mp3",
    "A7": "A7.mp3",

    "B0": "B0.mp3",
    "B1": "B1.mp3",
    "B2": "B2.mp3",
    "B3": "B3.mp3",
    "B4": "B4.mp3",
    "B5": "B5.mp3",
    "B6": "B6.mp3",
    "B7": "B7.mp3",

    "C1": "C1.mp3",
    "C2": "C2.mp3",
    "C3": "C3.mp3",
    "C4": "C4.mp3",
    "C5": "C5.mp3",
    "C6": "C6.mp3",
    "C7": "C7.mp3",
    "C8": "C8.mp3",

    "D1": "D1.mp3",
    "D2": "D2.mp3",
    "D3": "D3.mp3",
    "D4": "D4.mp3",
    "D5": "D5.mp3",
    "D6": "D6.mp3",
    "D7": "D7.mp3",

    "E1": "E1.mp3",
    "E2": "E2.mp3",
    "E3": "E3.mp3",
    "E4": "E4.mp3",
    "E5": "E5.mp3",
    "E6": "E6.mp3",
    "E7": "E7.mp3",

    "F1": "F1.mp3",
    "F2": "F2.mp3",
    "F3": "F3.mp3",
    "F4": "F4.mp3",
    "F5": "F5.mp3",
    "F6": "F6.mp3",
    "F7": "F7.mp3",

    "G1": "G1.mp3",
    "G2": "G2.mp3",
    "G3": "G3.mp3",
    "G4": "G4.mp3",
    "G5": "G5.mp3",
    "G6": "G6.mp3",
    "G7": "G7.mp3"
}, {
    baseUrl: "soundfont/piano/"
}).toMaster();
piano.volume.value = 10;


const bass = new Tone.Sampler({
    "A2": "pizz_a2_fa.mp3",
    "A3": "pizz_a3_fa.mp3",

    "C1": "pizz_c1_fa.mp3",
    "C3": "pizz_c3_fa.mp3",

    "E3": "pizz_e3_fa.mp3",

    "F2": "pizz_f2_fa.mp3",

    "G1": "pizz_g1_fa.mp3",
    "G3": "pizz_g3_fa.mp3"
}, {
    baseUrl: "soundfont/bass/"
}).toMaster();
bass.volume.value = -10;




function playMusic(){
    MidiConvert.load("midi/you.mid", function(midi){

        Tone.Transport.bpm.value = midi.header.bpm;

        //piano part
        new Tone.Part(function(time, note){

            piano.triggerAttackRelease(note.name, note.duration, time, note.velocity);

        }, midi.tracks[3].notes).start();


        //bass part
        new Tone.Part(function(time, note){

            bass.triggerAttackRelease(note.name, note.duration, time, note.velocity);

        }, midi.tracks[4].notes).start();


        Tone.Transport.start();
    });

}