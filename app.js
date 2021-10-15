class DrumKit {
  /* this is a mock, that comes form node server */
  soundClips = {
    clap: {
      808: { file: "clap-808.wav" },
      analog: { file: "clap-analog.wav" },
      crushed: { file: "clap-crushed.wav" },
      fat: { file: "clap-fat.wav" },
      slapper: { file: "clap-slapper.wav" },
      tape: { file: "clap-tape.wav" },
    },
    cowbell: { 808: { file: "cowbell-808.wav" } },
    crash: {
      808: { file: "crash-808.wav" },
      acoustic: { file: "crash-acoustic.wav" },
      noise: { file: "crash-noise.wav" },
      tape: { file: "crash-tape.wav" },
    },
    hihat: {
      808: { file: "hihat-808.wav" },
      acoustic01: { file: "hihat-acoustic01.wav" },
      acoustic02: { file: "hihat-acoustic02.wav" },
      analog: { file: "hihat-analog.wav" },
      digital: { file: "hihat-digital.wav" },
      dist01: { file: "hihat-dist01.wav" },
      dist02: { file: "hihat-dist02.wav" },
      electro: { file: "hihat-electro.wav" },
      plain: { file: "hihat-plain.wav" },
      reso: { file: "hihat-reso.wav" },
      ring: { file: "hihat-ring.wav" },
    },
    kick: {
      808: { file: "kick-808.wav" },
      acoustic01: { file: "kick-acoustic01.wav" },
      acoustic02: { file: "kick-acoustic02.wav" },
      big: { file: "kick-big.wav" },
      classic: { file: "kick-classic.wav" },
      cultivator: { file: "kick-cultivator.wav" },
      deep: { file: "kick-deep.wav" },
      dry: { file: "kick-dry.wav" },
      electro01: { file: "kick-electro01.wav" },
      electro02: { file: "kick-electro02.wav" },
      floppy: { file: "kick-floppy.wav" },
      gritty: { file: "kick-gritty.wav" },
      heavy: { file: "kick-heavy.wav" },
      newwave: { file: "kick-newwave.wav" },
      oldschool: { file: "kick-oldschool.wav" },
      plain: { file: "kick-plain.wav" },
      slapback: { file: "kick-slapback.wav" },
      softy: { file: "kick-softy.wav" },
      stomp: { file: "kick-stomp.wav" },
      tape: { file: "kick-tape.wav" },
      thump: { file: "kick-thump.wav" },
      tight: { file: "kick-tight.wav" },
      tron: { file: "kick-tron.wav" },
      vinyl01: { file: "kick-vinyl01.wav" },
      vinyl02: { file: "kick-vinyl02.wav" },
      zapper: { file: "kick-zapper.wav" },
    },
    openhat: {
      808: { file: "openhat-808.wav" },
      acoustic01: { file: "openhat-acoustic01.wav" },
      analog: { file: "openhat-analog.wav" },
      slick: { file: "openhat-slick.wav" },
      tight: { file: "openhat-tight.wav" },
    },
    perc: {
      808: { file: "perc-808.wav" },
      chirpy: { file: "perc-chirpy.wav" },
      hollow: { file: "perc-hollow.wav" },
      laser: { file: "perc-laser.wav" },
      metal: { file: "perc-metal.wav" },
      nasty: { file: "perc-nasty.wav" },
      short: { file: "perc-short.wav" },
      tambo: { file: "perc-tambo.wav" },
      tribal: { file: "perc-tribal.wav" },
      weirdo: { file: "perc-weirdo.wav" },
    },
    ride: {
      acoustic01: { file: "ride-acoustic01.wav" },
      acoustic02: { file: "ride-acoustic02.wav" },
    },
    shaker: {
      analog: { file: "shaker-analog.wav" },
      shuffle: { file: "shaker-shuffle.wav" },
      suckup: { file: "shaker-suckup.wav" },
    },
    snare: {
      808: { file: "snare-808.wav" },
      acoustic01: { file: "snare-acoustic01.wav" },
      acoustic02: { file: "snare-acoustic02.wav" },
      analog: { file: "snare-analog.wav" },
      big: { file: "snare-big.wav" },
      block: { file: "snare-block.wav" },
      brute: { file: "snare-brute.wav" },
      dist01: { file: "snare-dist01.wav" },
      dist02: { file: "snare-dist02.wav" },
      dist03: { file: "snare-dist03.wav" },
      electro: { file: "snare-electro.wav" },
      lofi01: { file: "snare-lofi01.wav" },
      lofi02: { file: "snare-lofi02.wav" },
      modular: { file: "snare-modular.wav" },
      noise: { file: "snare-noise.wav" },
      pinch: { file: "snare-pinch.wav" },
      punch: { file: "snare-punch.wav" },
      smasher: { file: "snare-smasher.wav" },
      sumo: { file: "snare-sumo.wav" },
      tape: { file: "snare-tape.wav" },
      vinyl01: { file: "snare-vinyl01.wav" },
      vinyl02: { file: "snare-vinyl02.wav" },
    },
    tom: {
      808: { file: "tom-808.wav" },
      acoustic01: { file: "tom-acoustic01.wav" },
      acoustic02: { file: "tom-acoustic02.wav" },
      analog: { file: "tom-analog.wav" },
      chiptune: { file: "tom-chiptune.wav" },
      fm: { file: "tom-fm.wav" },
      lofi: { file: "tom-lofi.wav" },
      rototom: { file: "tom-rototom.wav" },
      short: { file: "tom-short.wav" },
    },
  };

  constructor(params) {
    this.mainparent = params?.parent || "app";
    this.padNr = params?.pads || 8;
    this.drums = params?.drums || 4;
    this.drumSelect = null;

    this.drumNames = [];
    for (let drum in this.soundClips) {
      this.drumNames.push(drum);
    }

    this.config = [];
    for (let drumIndex = 0; drumIndex < this.drums; drumIndex++) {
      this.config.push(this.drumNames[drumIndex]);
    }

    this.tracks = [];
    this.selects = [];
    this.muteBtns = [];
    this.sounds = [];
    this.pads = [];

    this.createEditor();
    this.sequencer = this.createSequencer();
    this.createSequenceControls();

    this.index = 0;
    this.bpm = 150;
    this.isPlaying = null;
  }

  /* rendering general HTML element */
  createElem({ tag, content, attrs, parent, handleEvent }) {
    let elem = document.createElement(tag);
    for (let a in attrs) {
      if (a === "dataset") {
        for (let data in attrs[a]) {
          elem.dataset[data] = attrs[a][data];
        }
      } else {
        if (Array.isArray(attrs[a])) {
          elem.setAttribute(a, attrs[a].join(" "));
        } else {
          elem.setAttribute(a, attrs[a]);
        }
      }
    }

    let eventsToAdd = [];

    if (handleEvent) {
      if (Array.isArray(handleEvent)) {
        eventsToAdd = [...handleEvent];
      } else {
        eventsToAdd.push(handleEvent);
      }
      eventsToAdd.forEach((newEvent) => {
        elem.addEventListener(newEvent.event, newEvent.cb);
      });
    }

    elem.innerHTML = content ? content : null;

    if (typeof parent === "string") {
      parent = [".", "#"]
        .map((prep) => {
          return document.querySelector(prep + parent);
        })
        .filter((pe) => {
          return pe !== null;
        })[0];
    }
    parent.appendChild(elem);
    return elem;
  }

  createEditor() {
    const editor = this.createElem({
      tag: "div",
      attrs: { class: "soundborad-editor" },
      parent: this.mainparent,
    });
    this.drumSelect = this.createElem({
      tag: "select",
      attrs: { class: "select-drum" },
      parent: editor,
    });
    for (let drums in this.soundClips) {
      this.createElem({
        tag: "option",
        content: drums,
        value: drums,
        parent: this.drumSelect,
      });
    }
    this.createElem({
      tag: "button",
      content: '<i class="fas fa-plus-square"></i>',
      attrs: { class: ["add-drum", "icon-btn"] },
      handleEvent: {
        event: "click",
        cb: () => {
          this.addDrum();
        },
      },
      parent: editor,
    });
  }

  createSequencer() {
    const sequencer = this.createElem({
      tag: "div",
      attrs: { class: "sequencer" },
      parent: this.mainparent,
    });

    this.config.forEach((drum) => {
      this.createTrack({
        parent: sequencer,
        drum: drum,
      });
    });

    return sequencer;
  }

  createSequenceControls() {
    const seqCtrl = this.createElem({
      tag: "div",
      attrs: { class: "sequence-controls" },
      parent: this.mainparent,
    });

    this.playBtn = this.createElem({
      tag: "button",
      content: '<i class="fas fa-play"></i>',
      attrs: { class: ["play", "icon-btn"] },
      parent: seqCtrl,
      handleEvent: {
        event: "click",
        cb: () => {
          this.updateBtn();
          this.start();
        },
      },
    });

    const tempoCont = this.createElem({
      tag: "div",
      attrs: { class: "tempo" },
      parent: seqCtrl,
    });

    this.tempoSlider = this.createElem({
      tag: "input",
      attrs: {
        type: "range",
        class: "tempo-slider",
        max: "300",
        min: "20",
        value: "150",
      },
      handleEvent: [
        {
          event: "input",
          cb: (e) => {
            this.changeTempo(e);
          },
        },
        {
          event: "change",
          cb: (e) => {
            this.updateTempo(e);
          },
        },
      ],
      parent: tempoCont,
    });

    const text = this.createElem({
      tag: "p",
      content: "Tempo: ",
      parent: tempoCont,
    });

    this.tempoText = this.createElem({
      tag: "span",
      content: "150",
      attrs: { class: "tempo-nr" },
      parent: text,
    });

    return seqCtrl;
  }

  createTrackController({ parent, drum }) {
    const control = this.createElem({
      tag: "div",
      attrs: { class: "controls" },
      parent: parent,
    });

    this.createElem({
      tag: "h1",
      content: drum,
      attrs: { class: "controls" },
      parent: control,
    });

    const muteBtn = this.createElem({
      tag: "button",
      content: '<i class="fas fa-volume-mute"></i>',
      attrs: {
        class: ["mute", "icon-btn"],
        id: drum + "-muteBtn",
      },
      parent: control,
      handleEvent: {
        event: "click",
        cb: (e) => {
          this.mute(e);
        },
      },
    });

    this.createElem({
      tag: "button",
      content: '<i class="fas fa-trash-alt"></i>',
      attrs: {
        class: ["remove", "icon-btn"],
        id: drum + "-remove",
      },
      parent: control,
      handleEvent: {
        event: "click",
        cb: (e) => {
          this.removeDrum(e);
        },
      },
    });

    this.muteBtns.push(muteBtn);

    const drumType = this.createElem({
      tag: "select",
      attrs: {
        name: drum + "-select",
        id: drum + "-select",
      },
      parent: control,
      handleEvent: {
        event: "change",
        cb: (e) => {
          this.changeSound(e);
        },
      },
    });

    this.selects.push(drumType);

    for (let soundClip in this.soundClips[drum]) {
      this.createElem({
        tag: "option",
        content: soundClip,
        attrs: {
          value: "./sounds/" + this.soundClips[drum][soundClip].file,
        },
        parent: drumType,
      });
    }

    return control;
  }

  createTrack({ drum, parent }) {
    const track = this.createElem({
      tag: "div",
      attrs: {
        class: "track",
        id: drum + "-track",
      },
      parent: parent,
    });
    this.tracks.push(track);

    this.createTrackController({
      parent: track,
      drum: drum,
    });
    this.createPadContainer({
      parent: track,
      drum: drum,
    });

    const selectedSound = this.selects.filter((select) => {
      return select.id.split("-")[0] === drum;
    })[0].value;

    const sound = this.createElem({
      tag: "audio",
      attrs: {
        id: drum + "-sound",
        src: selectedSound,
      },
      parent: track,
    });

    this.sounds.push(sound);

    return track;
  }

  createPadContainer({ drum, parent }) {
    const pads = this.createElem({
      tag: "div",
      attrs: { class: ["pads", drum + "-pads"] },
      parent: parent,
    });

    for (let parentIndex = 0; parentIndex < this.padNr; parentIndex++) {
      this.pads.push(
        this.createPad({
          drum: drum,
          padIndex: parentIndex,
          parent: pads,
        })
      );
    }

    return pads;
  }

  createPad({ drum, padIndex, parent }) {
    const pad = this.createElem({
      tag: "div",
      attrs: {
        id: drum + "-pad",
        class: ["pad", "b" + padIndex],
      },
      parent: parent,
    });
    pad.addEventListener("click", this.activePad);
    pad.addEventListener("animationend", function () {
      pad.style.animation = "";
    });
    return pad;
  }

  activePad() {
    this.classList.toggle("active");
  }
  repeat() {
    let step = this.index % this.padNr;

    const activeBars = this.pads.filter((pad) => {
      return pad.classList.contains(`b${step}`);
    });

    //Loop over the pads
    activeBars.forEach((bar) => {
      if (bar.classList.contains("active")) {
        bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
        this.sounds
          .filter((sound) => {
            return sound.id.split("-")[0] === bar.id.split("-")[0];
          })
          .forEach((soundToPlay) => {
            soundToPlay.currentTime = 0;
            soundToPlay.play();
          });
      }
    });

    this.index++;
  }
  start() {
    const interval = (60 / this.bpm) * 1000;
    //Check if it's playing

    if (this.isPlaying) {
      //Clear the interval
      clearInterval(this.isPlaying);
      console.log(this.isPlaying);
      this.isPlaying = null;
    } else {
      this.isPlaying = setInterval(() => {
        this.repeat();
      }, interval);
    }
  }
  updateBtn() {
    if (!this.isPlaying) {
      this.playBtn.innerHTML = '<i class="fas fa-pause"></i>';
      this.playBtn.classList.add("active");
    } else {
      this.playBtn.innerHTML = '<i class="fas fa-play"></i>';
      this.playBtn.classList.remove("active");
    }
  }
  changeSound(e) {
    const selectionName = e.target.name;
    const selectionValue = e.target.value;

    const currSound = this.sounds.filter((sound) => {
      return sound.id.split("-")[0] === selectionName.split("-")[0];
    })[0];

    currSound.src = selectionValue;
  }
  mute(e) {
    e.target.classList.toggle("active");

    const mutedSound = this.sounds.filter((sound) => {
      return sound.id.split("-")[0] === e.target.id.split("-")[0];
    })[0];

    mutedSound.volume = e.target.classList.contains("active") ? 0 : 1;
  }
  changeTempo(e) {
    this.tempoText.innerText = e.target.value;
  }
  updateTempo(e) {
    this.bpm = e.target.value;
    clearInterval(this.isPlaying);
    this.isPlaying = null;
    if (playBtn.classList.contains("active")) {
      this.start();
    }
  }
  removeDrum(e) {
    const drumToDelete = e.target.id.split("-")[0];

    this.config = this.config.filter((drum) => {
      return drumToDelete !== drum;
    });

    this.tracks
      .filter((track) => {
        return track.id === drumToDelete + "-track";
      })
      .forEach((trackToDelete) => {
        trackToDelete.remove();
      });

    const toFilter = ["track", "sound", "muteBtn", "select", "pad"];

    toFilter.forEach((filter) => {
      this[filter + "s"] = this[filter + "s"].filter((elem) => {
        return elem.id !== drumToDelete + "-" + filter;
      });
    });
  }
  addDrum() {
    console.log();
    if (!this.config.includes(this.drumSelect.value)) {
      this.config.push(this.drumSelect.value);
      console.log(this.config);
    } else {
      console.error(this.drumSelect.value + "is already added!");
    }
    this.createTrack({ drum: this.drumSelect.value, parent: this.sequencer });
  }
}

const drumKit = new DrumKit();
