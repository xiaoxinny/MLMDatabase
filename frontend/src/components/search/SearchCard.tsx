import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';
import { LinkedIn } from '@mui/icons-material';
import Button from '@mui/material/Button';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemText } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

// TabPanel component to render content for each tab
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// Accessibility props for tabs
function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

export const SearchCard = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        maxWidth: 600,
        width: '100%',
        minWidth: 300
      }}
    >
      <AppBar position='static'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='secondary'
          textColor='inherit'
          variant='fullWidth'
          aria-label='tabs for switching inputs'
        >
          <Tab label='Name-based' {...a11yProps(0)} />
          <Tab label='Company-based' {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <Typography variant='h4'>Search by Name</Typography>
        <List
          dense
          component='ul'
          sx={{
            listStyleType: 'disc',
            listStylePosition: 'outside',
            pl: 3
          }}
        >
          <ListItem
            dense
            component='li'
            sx={{ display: 'list-item', pl: 1, py: 0 }}
          >
            <ListItemText primary='Enter the full name of the individual you are searching for, assuming it has been provided to you.'></ListItemText>
          </ListItem>
          <ListItem
            dense
            component='li'
            sx={{ display: 'list-item', pl: 1, py: 0 }}
          >
            <ListItemText primary='Partial names would return all matches rather than a specific individual.'></ListItemText>
          </ListItem>
          <ListItem
            dense
            component='li'
            sx={{ display: 'list-item', pl: 1, pt: 0, pb: 2 }}
          >
            <ListItemText primary='LinkedIn profile URLs can be provided to help narrow down the search results.'></ListItemText>
          </ListItem>
        </List>
        {/* Input field for username search */}
        <Typography variant='body2' gutterBottom paddingLeft={1}>
          Full Name
        </Typography>
        <TextField
          required
          fullWidth
          sx={{
            mb: 3
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position='start'>
                  <AccountCircle />
                </InputAdornment>
              )
            }
          }}
          type='search'
        />
        {/* Input field to supplement LinkedIn URL */}
        <Typography variant='body2' gutterBottom paddingLeft={1}>
          LinkedIn Profile URL (Optional)
        </Typography>
        <TextField
          fullWidth
          sx={{
            mb: 3
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position='start'>
                  <LinkedIn />
                </InputAdornment>
              )
            }
          }}
          type='search'
        />
        {/* Button to start search */}
        <Button
          fullWidth
          color='secondary'
          onClick={handleClick}
          loading={loading}
          loadingPosition='start'
          startIcon={<SearchRoundedIcon />}
          variant='contained'
        >
          Search
        </Button>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Typography variant='h4'>Search by Company</Typography>
        <List
          dense
          component='ul'
          sx={{
            listStyleType: 'disc',
            listStylePosition: 'outside',
            pl: 3
          }}
        >
          <ListItem
            dense
            component='li'
            sx={{ display: 'list-item', pl: 1, py: 0 }}
          >
            <ListItemText primary='Choose a copy from the dropdown provided.'></ListItemText>
          </ListItem>
          <ListItem
            dense
            component='li'
            sx={{ display: 'list-item', pl: 1, py: 0 }}
          >
            <ListItemText primary='The search will return ALL employees associated with the selected company.'></ListItemText>
          </ListItem>
          <ListItem
            dense
            component='li'
            sx={{ display: 'list-item', pl: 1, pt: 0, pb: 2 }}
          >
            <ListItemText primary='If the company is not listed, please contact support to have it added.'></ListItemText>
          </ListItem>
        </List>
        {/* Input field for copany search */}
        <Typography variant='body2' gutterBottom paddingLeft={1}>
          Company Name
        </Typography>
        <TextField
          required
          fullWidth
          sx={{
            mb: 3
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position='start'>
                  <BusinessIcon />
                </InputAdornment>
              )
            }
          }}
          type='search'
        />
        {/* Button to start search */}
        <Button
          fullWidth
          color='secondary'
          onClick={handleClick}
          loading={loading}
          loadingPosition='start'
          startIcon={<SearchRoundedIcon />}
          variant='contained'
        >
          Search
        </Button>
      </TabPanel>
    </Box>
  );
};
