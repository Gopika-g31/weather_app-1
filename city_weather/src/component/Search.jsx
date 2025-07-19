import React, { useState } from 'react';
import { Autocomplete, Box, TextField, InputAdornment, Chip, Stack, IconButton, Divider } from "@mui/material";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { sortBy } from 'lodash';

const indianCities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Surat",
    "Pune", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam",
    "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut",
    "Rajkot", "Kalyan-Dombivali", "Vasai-Virar", "Varanasi", "Srinagar", "Aurangabad"
];

export const Search = () => {
    const [cityName, setCityName] = useState("");

    return (
        <Box sx={{ mt: 2, width: 320, mx: 'auto' }}>
            <Autocomplete
                options={sortBy(indianCities, city => city.toLowerCase())}
                value={cityName}
                disableCloseOnSelect
                onChange={(event, newValue) => setCityName(newValue)}
                renderValue={(value, getItemProps) => (
                    <Stack direction="row" alignItems="center" sx={{ width: '100%' }}>
                        {value ? (
                            <>
                                <Chip
                                    {...getItemProps({ item: value })}
                                    label={
                                        <Stack direction="row" alignItems="center" spacing={1} justifyContent={'center'}>
                                            <img
                                                src="https://flagcdn.com/w20/in.png"
                                                alt="IN"
                                                style={{ width: 20, height: 14, borderRadius: 2 }}
                                            />
                                            <span style={{ fontWeight: 500 }}>{value}</span>
                                        </Stack>
                                    }
                                    sx={{
                                        backgroundColor: '#fff',
                                        color: '#000',
                                        border: '1px solid #ccc',
                                        fontWeight: 500,
                                        fontFamily: 'Poppins',
                                        fontSize: '16px',
                                        borderRadius: '12px',
                                        boxShadow: '0 2px 8px rgba(33,150,243,0.15)',
                                        px: 1,
                                        py: 1,
                                    }}
                                />
                            </>
                        ) : ''}
                    </Stack>
                )}
                renderInput={(params) => (
                    <Box sx={{ position: 'relative', width: '100%' }}>
                        <TextField
                            {...params}
                            placeholder={cityName ? "" : "Type or Select a city"}
                            variant="outlined"
                            inputProps={{
                                ...params.inputProps,
                                readOnly: !!cityName,
                            }}
                            InputProps={{
                                ...params.InputProps,
                                startAdornment: !cityName ? (
                                    <InputAdornment position="start">
                                        <LocationCityIcon sx={{ color: '#26BBF1', fontSize: 28, mr: 1 }} />
                                    </InputAdornment>
                                ) : params.InputProps.startAdornment,
                                endAdornment: (
                                    <Box sx={{
                                        position: 'absolute',
                                        right: 8,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        zIndex: 2,
                                    }}>
                                        {cityName && (
                                            <Stack direction="row" alignItems="center" justifyContent="flex-end">
                                                <IconButton>
                                                    <span className="material-symbols-outlined" style={{ fontSize: '20px', color: '#26BBF1' }}>
                                                        search
                                                    </span>
                                                </IconButton>
                                                <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />
                                                <IconButton onClick={() => setCityName("")}>
                                                    <span className="material-symbols-outlined" style={{ fontSize: '20px', color: '#26BBF1' }}>
                                                        clear
                                                    </span>
                                                </IconButton>
                                            </Stack>
                                        )}
                                    </Box>
                                ),
                            }}
                            sx={{
                                backgroundColor: '#fff',
                                width: '100%',
                                borderRadius: '16px',
                                boxShadow: '0 4px 24px rgba(33,150,243,0.18)',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '16px',
                                    fontSize: '16px',
                                    fontFamily: 'Poppins',
                                    fontWeight: 500,
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#2196f3',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#1976d2',
                                        borderWidth: 2,
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    padding: '16px 18px',
                                },
                                '& .MuiAutocomplete-input': {
                                    minWidth: '0PX !important',
                                    fontFamily: 'Poppins',
                                },
                            }}
                        />
                    </Box>
                )}
                sx={{
                    '& .MuiAutocomplete-listbox': {
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        borderRadius: '12px',
                        boxShadow: '0 4px 24px rgba(33,150,243,0.12)',
                        background: '#fff',
                        '& .MuiAutocomplete-option': {
                            px: 2,
                            py: 1.5,
                            borderRadius: '8px',
                            transition: 'background 0.2s',
                            '&:hover': {
                                background: '#e3f2fd',
                            },
                        },
                    },
                }}
            />
        </Box>
    );
};