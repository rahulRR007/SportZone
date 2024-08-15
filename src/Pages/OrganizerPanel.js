// src/components/OrganizerPanel.js

import React, { useState } from 'react';
import { participants } from '../Components/participants';
import NavBar from '../Components/OrganizerPanelNavBar';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';

// const FullWidthContainer = styled(Container)({
//   width: '100%',
//   padding: '0',
// });

const FullWidthTableContainer = styled(TableContainer)({
  width: '100%',
  maxWidth: '100%',
  height: 'calc(100vh - 64px)', // Adjust the height according to your needs
  overflow: 'auto',
});

const FullWidthTableCell = styled(TableCell)({
  padding: '8px',
  wordWrap: 'break-word',
  whiteSpace: 'normal',
});

export default function OrganizerPanel() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredParticipants, setFilteredParticipants] = useState(participants);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term) {
      const filtered = participants.filter(
        (participant) =>
          participant.name.toLowerCase().includes(term.toLowerCase()) ||
          participant.tournament.toLowerCase().includes(term.toLowerCase()) ||
          participant.id.toString().includes(term)
      );
      setFilteredParticipants(filtered);
    } else {
      setFilteredParticipants(participants);
    }
  };

  const handleDelete = (id) => {
    setFilteredParticipants(filteredParticipants.filter((participant) => participant.id !== id));
  };

  return (
    <div>
      <NavBar onSearch={handleSearch} />
      {/* <FullWidthContainer> */}
        <FullWidthTableContainer component={Paper}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <FullWidthTableCell>S.No</FullWidthTableCell>
                <FullWidthTableCell>Name</FullWidthTableCell>
                <FullWidthTableCell>Tournament</FullWidthTableCell>
                <FullWidthTableCell>Gender</FullWidthTableCell>
                <FullWidthTableCell>Team ID</FullWidthTableCell>
                <FullWidthTableCell>Actions</FullWidthTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredParticipants.map((participant) => (
                <TableRow key={participant.id}>
                  <FullWidthTableCell>{participant.sno}</FullWidthTableCell>
                  <FullWidthTableCell>{participant.name}</FullWidthTableCell>
                  <FullWidthTableCell>{participant.tournament}</FullWidthTableCell>
                  <FullWidthTableCell>{participant.gender}</FullWidthTableCell>
                  <FullWidthTableCell>{participant.teamId}</FullWidthTableCell>
                  <FullWidthTableCell>
                    <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(participant.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </FullWidthTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </FullWidthTableContainer>
      {/* </FullWidthContainer> */}
    </div>
  );
}
