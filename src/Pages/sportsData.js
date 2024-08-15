// src/services/tournamentService.js

import axios from 'axios';

const API_URL = 'http://localhost:8080/api/tournaments/all';

export const fetchTournaments = async () => {
  try {
    const response = await axios.get(API_URL);
    const tournaments = response.data;

    const formattedTournaments = tournaments.map((tournament) => ({

      tour_id: tournament.tour_id, // Add tour_id to the returned object
      name: tournament.name,
      organizer: tournament.organizer,
      location: tournament.location,
      mapLink: 'https://www.google.com/maps',
      sport: tournament.sport,
      gender: tournament.gender,
      teamSize: tournament.teamSize,
      currentTeams: `${tournament.currentTeams || 0}/20`, // Modify as needed
      date: tournament.dates,
      prize: `$${tournament.prizeMoney}`,
      image: `data:image/png;base64,${tournament.image}`, // Ensure the image is Base64 encoded
    }));

    return formattedTournaments;
  } catch (error) {
    console.error('Error fetching tournaments:', error);
    throw error; // Propagate the error to the caller
  }
};
