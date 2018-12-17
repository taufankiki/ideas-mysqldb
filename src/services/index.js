const users = require('./users/users.service.js');
const ideas = require('./ideas/ideas.service.js');
const komentars = require('./komentars/komentars.service.js');
const komentarsEvent = require('./komentars-event/komentars-event.service.js');
const beritas = require('./beritas/beritas.service.js');
const playlist = require('./playlist/playlist.service.js');
const kategori = require('./kategori/kategori.service.js');
const staging = require('./staging/staging.service.js');
const events = require('./events/events.service.js');
const room = require('./room/room.service.js');
const scoring = require('./scoring/scoring.service.js');
const booking = require('./booking/booking.service.js');
const expertReview = require('./expert-review/expert-review.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(ideas);
  app.configure(komentars);
  app.configure(komentarsEvent);
  app.configure(beritas);
  app.configure(playlist);
  app.configure(kategori);
  app.configure(staging);
  app.configure(events);
  app.configure(room);
  app.configure(scoring);
  app.configure(booking);
  app.configure(expertReview);
};
