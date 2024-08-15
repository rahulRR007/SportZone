// import React, { useState } from 'react';
// import { Container, TextField, Button, Typography, Box, Stepper, Step, StepLabel } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { UploadFile } from '@mui/icons-material';

// const ScheduleForm = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const steps = ['Basic Info', 'Rules & Regulations', 'Schedule', 'Prize Structure', 'Additional Options'];

//   const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

//   <LocalizationProvider dateAdapter={AdapterDateFns}>
//   <DatePicker label="Start Date" renderInput={(params) => <TextField fullWidth margin="normal" {...params} />} />
//   <DatePicker label="End Date" renderInput={(params) => <TextField fullWidth margin="normal" {...params} />} />
// </LocalizationProvider>

//   const renderStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return (
//           <Box>
//             <TextField fullWidth label="Tournament Name" margin="normal" />
//             <TextField fullWidth label="Sport" margin="normal" />
//             <TextField fullWidth label="Location" margin="normal" />
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <DatePicker label="Start Date" renderInput={(params) => <TextField fullWidth margin="normal" {...params} />} />
//               <DatePicker label="End Date" renderInput={(params) => <TextField fullWidth margin="normal" {...params} />} />
//             </LocalizationProvider>
//             <TextField fullWidth label="Format" margin="normal" />
//             <TextField fullWidth label="Prize Money" margin="normal" />
//             <TextField fullWidth label="Number of Participants" margin="normal" />
//             <TextField fullWidth label="Registration Fee (optional)" margin="normal" />
//             <Button
//               variant="contained"
//               component="label"
//               startIcon={<UploadFile />}
//               fullWidth
//               sx={{ marginTop: '1rem' }}
//             >
//               Upload Tournament Image
//               <input type="file" hidden />
//             </Button>
//           </Box>
//         );
//       case 1:
//         return (
//           <Box>
//             <TextField
//               fullWidth
//               label="Tournament Rules and Regulations"
//               margin="normal"
//               multiline
//               rows={4}
//             />
//             <Button
//               variant="contained"
//               component="label"
//               startIcon={<UploadFile />}
//               fullWidth
//               sx={{ marginTop: '1rem' }}
//             >
//               Upload Rule Document (optional)
//               <input type="file" hidden />
//             </Button>
//           </Box>
//         );
//       case 2:
//         return (
//           <Box>
//             <TextField fullWidth label="Match Times and Dates" margin="normal" />
//             <Button variant="contained" fullWidth sx={{ marginTop: '1rem' }}>
//               Generate Random Schedule
//             </Button>
//             <TextField fullWidth label="Assign Venues to Matches" margin="normal" />
//           </Box>
//         );
//       case 3:
//         return (
//           <Box>
//             <TextField fullWidth label="Prize Amounts for Different Positions" margin="normal" />
//             <TextField fullWidth label="Prize Distribution Criteria" margin="normal" />
//           </Box>
//         );
//       case 4:
//         return (
//           <Box>
//             <TextField fullWidth label="Age Restrictions" margin="normal" />
//             <TextField fullWidth label="Skill Level Requirements" margin="normal" />
//             <TextField fullWidth label="Team Size Limits" margin="normal" />
//             <TextField fullWidth label="Registration Deadlines" margin="normal" />
//             <TextField fullWidth label="Payment Options" margin="normal" />
//             <TextField fullWidth label="Confirmation Email Template" margin="normal" />
//           </Box>
//         );
//       default:
//         return 'Unknown step';
//     }
//   };

//   return (
//     <Container maxWidth="md">
//       <Typography variant="h4" align="center" gutterBottom>
//         Create a New Tournament
//       </Typography>
//       <Stepper activeStep={activeStep} alternativeLabel>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       <form>
//         {renderStepContent(activeStep)}
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
//           <Button
//             disabled={activeStep === 0}
//             onClick={handleBack}
//             variant="contained"
//           >
//             Back
//           </Button>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={activeStep === steps.length - 1 ? () => alert('Tournament Created!') : handleNext}
//           >
//             {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//           </Button>
//         </Box>
//       </form>
//     </Container>
//   );
// };

// export default ScheduleForm;
