import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Grid, Paper, ToggleButton, Button, ToggleButtonGroup } from '@mui/material'
import Container from '@mui/material/Container'
import LayercakMap from '../src/components/LayerCakeMap'
import MockDataCareerBrainstate from '../src/Mockdata/MockData_LayercakeMap_CareerBrain_State.json'
import msaWorkerRatio from '../src/Mockdata/msaWorkerRatio_CareerBrain.json'
// import msaWorkerRatio_purdue from '../../../public/msaWorkerRatio_Purdue.json'
// import MockData_LayercakerMap_Purdue from '../../../public/MockData_LayercakerMap_Purdue.json'
// import MockData_LayerCakeMap_StateMapOption from '../../../public/MockData_LayerCakeMap_StateMapOption.json'
// import MockData_LayerCakeMap_MsaMapOption from '../../../public/MockData_LayerCakeMap_MsaMapOption.json'
// import MockData_LayerCakeMap_StateMapOptionPurdue from '../../../public/MockData_LayerCakeMap_StateMapOptionPurdue.json'
// import MockData_LayerCakeMap_MsaMapOptionPurdue from '../../../public/MockData_LayerCakeMap_MsaMapOptionPurdue.json'

export default function Map(){
    const [alignment, setAlignment] = React.useState('state')
    const [selectedMap, setSelectedMap] = useState('state')
  
    const handleMapTypeChange = (event, newAlignment) => {
      setAlignment(newAlignment)
      setSelectedMap(newAlignment)
    }

    return(
        <div>
        <Container maxWidth="xl" sx={{ p: 1 }}>
            <Box sx={{ ml: '25%', mt: 5 }}>
                <Box sx={{ display: 'flex', m: 'auto', width: '80%' }}>
                    <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleMapTypeChange}
                    aria-label="Platform"
                    >
                    <ToggleButton value="state">State</ToggleButton>
                    <ToggleButton value="msa">MSA</ToggleButton>
                    </ToggleButtonGroup>
                    {}
                </Box>
                <Box sx={{ display: 'flex', m: 'auto', width: '100%', pt: 2 }}>
                  <LayercakMap Layer={selectedMap} LayerCakeMapColor={['#867070','#D5B4B4','#E4D0D0','#F5EBEB']} LayerCakeMapStateData={MockDataCareerBrainstate.MockDataforStateCareerBrain} LayerCakeMapMsaData={msaWorkerRatio.msaWorkerRatio}/>
                    </Box>
            </Box>
        </Container>
        </div>
    )
}