const API_URL = 'https://www.eventbriteapi.com/v3';

export const fetchEventsByQuery = query =>
  fetch(`${API_URL}/events/search/?q=${query}&token=BHVEJSNZNZRUKYVRCKVH`)
    .then((res) => {
      if (!res.ok) {
        return { ok: false, events: null };
      }

      return res.json().then(data => ({ ok: true, events: data.events }));
    });

export const fetchOneEvent = id =>
  fetch(`${API_URL}/events/${id}/?expand=venue&token=BHVEJSNZNZRUKYVRCKVH`)
    .then((res) => {
      if (!res.ok) {
        return { ok: false, venue: null };
      }
      return res.json().then(data => ({ ok: true, venue: data.venue }));
    });
