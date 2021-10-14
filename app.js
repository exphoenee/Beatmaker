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
    this.pads = params?.pads || 8;
    this.drums = params?.drums || 3;
    this.drumNames = [];

    for (let drum in this.soundClips) {
      this.drumNames.push(drum);
    }

    for (let d = 0; d < this.drums; d++) {
      console.log(this.drumNames[d]);
      for (let p = 0; p < this.pads; p++) {
        this.createElem({
          tag: "div",
          attrs: { class: this.drumNames[d] },
          parent: "test",
        });
        this.createElem({
          tag: "div",
          attrs: { class: ["pad", this.drumNames[d] + "-pad", "b" + p] },
          parent: "test",
        });
      }
    }

    this.pads = document.querySelectorAll(".pad");

    this.playBtn = document.querySelector(".play");
    this.currentKick = "./sounds/kick-classic.wav";
    this.currentSnare = "./sounds/snare-acoustic01.wav";
    this.currentHihat = "./sounds/hihat.acoustic01.wav";
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.index = 0;
    this.bpm = 150;
    this.isPlaying = null;
    this.selects = document.querySelectorAll("select");
    this.muteBtns = document.querySelectorAll(".mute");
    this.tempoSlider = document.querySelector(".tempo-slider");
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

    if (handleEvent) elem.addEventListener(handleEvent.event, handleEvent.cb);

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

  activePad() {
    this.classList.toggle("active");
  }
  repeat() {
    let step = this.index % 8;
    const activeBars = document.querySelectorAll(`.b${step}`);
    //Loop over the pads
    activeBars.forEach((bar) => {
      bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
      if (bar.classList.contains("active")) {
        if (bar.classList.contains("kick-pad")) {
          this.kickAudio.currentTime = 0;
          this.kickAudio.play();
        }
        if (bar.classList.contains("snare-pad")) {
          this.snareAudio.currentTime = 0;
          this.snareAudio.play();
        }
        if (bar.classList.contains("hihat-pad")) {
          this.hihatAudio.currentTime = 0;
          this.hihatAudio.play();
        }
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
    //NULL

    if (!this.isPlaying) {
      this.playBtn.innerText = "Stop";
      this.playBtn.classList.add("active");
    } else {
      this.playBtn.innerText = "Play";
      this.playBtn.classList.remove("active");
    }
  }
  changeSound(e) {
    const selectionName = e.target.name;
    const selectionValue = e.target.value;
    switch (selectionName) {
      case "kick-select":
        this.kickAudio.src = selectionValue;
        break;
      case "snare-select":
        this.snareAudio.src = selectionValue;
        break;
      case "hihat-select":
        this.hihatAudio.src = selectionValue;
        break;
    }
  }
  mute(e) {
    const muteIndex = e.target.getAttribute("data-track");
    e.target.classList.toggle("active");
    if (e.target.classList.contains("active")) {
      switch (muteIndex) {
        case "0":
          this.kickAudio.volume = 0;
          break;
        case "1":
          this.snareAudio.volume = 0;
          break;
        case "2":
          this.hihatAudio.volume = 0;
          break;
      }
    } else {
      switch (muteIndex) {
        case "0":
          this.kickAudio.volume = 1;
          break;
        case "1":
          this.snareAudio.volume = 1;
          break;
        case "2":
          this.hihatAudio.volume = 1;
          break;
      }
    }
  }
  changeTempo(e) {
    const tempoText = document.querySelector(".tempo-nr");

    tempoText.innerText = e.target.value;
  }
  updateTempo(e) {
    this.bpm = e.target.value;
    clearInterval(this.isPlaying);
    this.isPlaying = null;
    const playBtn = document.querySelector(".play");
    if (playBtn.classList.contains("active")) {
      this.start();
    }
  }
}

const drumKit = new DrumKit();

//Event Listeners

drumKit.pads.forEach((pad) => {
  pad.addEventListener("click", drumKit.activePad);
  pad.addEventListener("animationend", function () {
    this.style.animation = "";
  });
});

drumKit.playBtn.addEventListener("click", function () {
  drumKit.updateBtn();
  drumKit.start();
});

drumKit.selects.forEach((select) => {
  select.addEventListener("change", function (e) {
    drumKit.changeSound(e);
  });
});

drumKit.muteBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    drumKit.mute(e);
  });
});

drumKit.tempoSlider.addEventListener("input", function (e) {
  drumKit.changeTempo(e);
});

drumKit.tempoSlider.addEventListener("change", function (e) {
  drumKit.updateTempo(e);
});
