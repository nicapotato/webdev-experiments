export class GameAudio {
  private audioContext: AudioContext;
  private sounds: Map<string, AudioBuffer> = new Map();
  private backgroundMusic?: AudioBufferSourceNode;
  private motorSound?: AudioBufferSourceNode;
  private drillingSound?: AudioBufferSourceNode;
  private isMotorPlaying = false;
  private isBackgroundMusicPlaying = false;
  private isDrillingPlaying = false;

  constructor() {
    this.audioContext = new AudioContext();
    this.loadSounds();
  }

  private async loadSounds() {
    try {
      // Load background music
      const bgMusicResponse = await fetch(
        "/games/motherload/audio/accoustic-theme.mp3",
      );
      const bgMusicBuffer = await bgMusicResponse.arrayBuffer();
      const bgMusicAudio =
        await this.audioContext.decodeAudioData(bgMusicBuffer);
      this.sounds.set("background", bgMusicAudio);

      // Load motor sound
      const motorResponse = await fetch("/games/motherload/audio/motor.mp3");
      const motorBuffer = await motorResponse.arrayBuffer();
      const motorAudio = await this.audioContext.decodeAudioData(motorBuffer);
      this.sounds.set("motor", motorAudio);

      // Load drilling sound
      const drillingResponse = await fetch(
        "/games/motherload/audio/drilling-sound.mp3",
      );
      const drillingBuffer = await drillingResponse.arrayBuffer();
      const drillingAudio =
        await this.audioContext.decodeAudioData(drillingBuffer);
      this.sounds.set("drilling", drillingAudio);

      console.log("🎵 All audio files loaded successfully!", {
        background: this.sounds.has("background"),
        motor: this.sounds.has("motor"),
        drilling: this.sounds.has("drilling"),
      });
    } catch (error) {
      console.error("Failed to load audio:", error);
    }
  }

  async ensureAudioContext() {
    // Handle browser autoplay policies
    if (this.audioContext.state === "suspended") {
      await this.audioContext.resume();
    }
  }

  async startBackgroundMusic() {
    console.log("🎵 Attempting to start background music...");
    await this.ensureAudioContext();

    if (this.isBackgroundMusicPlaying) {
      console.log("🎵 Background music already playing");
      return;
    }

    const buffer = this.sounds.get("background");
    if (!buffer) {
      console.error("🎵 Background music buffer not found!");
      return;
    }
    console.log("🎵 Background music buffer loaded, starting playback...");

    this.backgroundMusic = this.audioContext.createBufferSource();
    this.backgroundMusic.buffer = buffer;
    this.backgroundMusic.loop = true;

    // Set volume for background music
    const gainNode = this.audioContext.createGain();
    gainNode.gain.value = 0.6; // Increased to 60% volume for better audibility
    this.backgroundMusic.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    console.log("🎵 Audio context state:", this.audioContext.state);
    console.log("🎵 Audio context sample rate:", this.audioContext.sampleRate);
    console.log("🎵 Gain node value:", gainNode.gain.value);

    this.backgroundMusic.start();
    this.isBackgroundMusicPlaying = true;
    console.log("🎵 Background music started successfully!");
  }

  stopBackgroundMusic() {
    if (this.backgroundMusic && this.isBackgroundMusicPlaying) {
      this.backgroundMusic.stop();
      this.isBackgroundMusicPlaying = false;
      console.log("🎵 Background music stopped");
    }
  }

  async startMotorSound() {
    await this.ensureAudioContext();

    if (this.isMotorPlaying) return;

    const buffer = this.sounds.get("motor");
    if (!buffer) return;

    this.motorSound = this.audioContext.createBufferSource();
    this.motorSound.buffer = buffer;
    this.motorSound.loop = true;

    // Set volume for motor sound
    const gainNode = this.audioContext.createGain();
    gainNode.gain.value = 0.5; // 50% volume
    this.motorSound.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    this.motorSound.start();
    this.isMotorPlaying = true;
  }

  stopMotorSound() {
    if (this.motorSound && this.isMotorPlaying) {
      this.motorSound.stop();
      this.isMotorPlaying = false;
    }
  }

  async startDrillingSound() {
    await this.ensureAudioContext();

    if (this.isDrillingPlaying) {
      return;
    }

    const buffer = this.sounds.get("drilling");
    if (!buffer) {
      console.error("🔊 Drilling sound buffer not found!");
      return;
    }

    this.drillingSound = this.audioContext.createBufferSource();
    this.drillingSound.buffer = buffer;

    // Set volume for drilling sound
    const gainNode = this.audioContext.createGain();
    gainNode.gain.value = 0.4; // 40% volume
    this.drillingSound.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    const maxStartTime = Math.max(0, buffer.duration - 1);
    const randomStartTime = Math.random() * maxStartTime;

    this.drillingSound.start(0, randomStartTime, 1); // Play for 1 second from random position
    this.isDrillingPlaying = true;

    // Auto-stop after 1 second
    setTimeout(() => {
      this.isDrillingPlaying = false;
      console.log("🔊 Drilling sound finished");
    }, 1000);
  }

  stopDrillingSound() {
    if (this.drillingSound && this.isDrillingPlaying) {
      this.drillingSound.stop();
      this.isDrillingPlaying = false;
    }
  }

  cleanup() {
    this.stopBackgroundMusic();
    this.stopMotorSound();
    this.stopDrillingSound();
    this.audioContext.close();
  }
}
