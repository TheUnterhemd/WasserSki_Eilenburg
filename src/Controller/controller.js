// Hilfsfunktion zur Bestimmung der Windrichtung
export const getWindDirection = (degree) => {
    const directions = ['Nord', 'Nord-Ost', 'Ost', 'Süd-Ost', 'Süd', 'Süd-West', 'West', 'NordWest'];
    const index = Math.round((degree % 360) / 45);
    return directions[index];
  };