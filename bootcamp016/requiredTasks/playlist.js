"use strict";

/*Add: Pushes the passed-through song to the songs array
Play: Plays current song based on array index
Stop: Holds place in array, but calls above stop song prototype function
Next: Sets the next song in the songs array, calling the above play prototype function
Song should take in two arguments, title and artist, which should both be added as properties when the
Song constructor function is used.
Play: Sets the song as playing using isPlaying
Stop: Sets the song as not playing (isPlaying = false) */

class Playlist {
  constructor() {
    this.songs = [];
    this.index = 0;
    this.isPlaying = null;
  }
  add(song) {
    this.songs.push(song);
  }
  play() {
    if (this.isPlaying === false) {
      console.log(`${this.songs[this.index].title} started`);
      return;
    }
    this.isPlaying = true;
    console.log(`${this.songs[this.index].title} started to play`);
  }
  next() {
    if (this.songs[this.index + 1] === undefined) {
      console.log(
        `${this.songs[this.index].title} stopped, ${
          this.songs[0].title
        } started`
      );
      this.index = 0;
      return;
    }
    console.log(
      `${this.songs[this.index++].title} stopped, ${
        this.songs[this.index].title
      } started`
    );
  }
  stop() {
    this.isPlaying = false;
    console.log(`${this.songs[this.index].title} stopped`);
  }
}
class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }
}

const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");
playlist.add(heyJude);
playlist.add(jaded);
playlist.play(); // Hey Jude started to play
playlist.next(); // Hey Jude stopped, Jaded started
playlist.next(); // Jaded stopped, Hey Jude started
playlist.stop(); // Hey Jude stopped
playlist.play(); // Hey Jude started
