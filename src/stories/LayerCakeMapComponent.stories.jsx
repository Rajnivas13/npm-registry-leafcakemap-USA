import LayerCakeMap from '../components/LayerCakeMap'
import MockDataCareerBrainstate from '../Mockdata/MockData_LayercakeMap_CareerBrain_State.json'
import msaWorkerRatio from '../Mockdata/msaWorkerRatio_CareerBrain.json'

export default{
    title: 'LayerCakeMapComponent',
    component: LayerCakeMap
}

//export const OriginalLayerCakeMap = () =>{<LayerCakeMap Layer={'state'} LayerCakeMapColor={['#867070','#D5B4B4','#E4D0D0','#F5EBEB']} LayerCakeMapStateData={MockDataCareerBrainstate.MockDataforStateCareerBrain} LayerCakeMapMsaData={msaWorkerRatio.msaWorkerRatio}/>}
export const StateLayerCakeMap = () => {
    return (
      <LayerCakeMap
        Layer={'state'}
        LayerCakeMapColor={['#867070','#D5B4B4','#E4D0D0','#F5EBEB']}
        LayerCakeMapStateData={MockDataCareerBrainstate.MockDataforStateCareerBrain}
        LayerCakeMapMsaData={msaWorkerRatio.msaWorkerRatio}
      />
    );
  }

export const MSALayerCakeMap = () => {
return (
    <LayerCakeMap
    Layer={'msa'}
    LayerCakeMapColor={['#867070','#D5B4B4','#E4D0D0','#F5EBEB']}
    LayerCakeMapStateData={MockDataCareerBrainstate.MockDataforStateCareerBrain}
    LayerCakeMapMsaData={msaWorkerRatio.msaWorkerRatio}
    />
);
}

export const StateUpdatedColor = () => {
    return (
        <LayerCakeMap
        Layer={'state'}
        LayerCakeMapColor={['#11009E','#4942E4','#8696FE','#C4B0FF']}
        LayerCakeMapStateData={MockDataCareerBrainstate.MockDataforStateCareerBrain}
        LayerCakeMapMsaData={msaWorkerRatio.msaWorkerRatio}
        />
    );
}

export const MSAUpdatedColor = () => {
    return (
        <LayerCakeMap
        Layer={'msa'}
        LayerCakeMapColor={['#11009E','#4942E4','#8696FE','#C4B0FF']}
        LayerCakeMapStateData={MockDataCareerBrainstate.MockDataforStateCareerBrain}
        LayerCakeMapMsaData={msaWorkerRatio.msaWorkerRatio}
        />
    );
}

export const ChangeWidth = () => {
    return (
        <LayerCakeMap
        Layer={'state'}
        width={'1000px'}
        LayerCakeMapColor={['#27374D','#526D82','#9DB2BF','#DDE6ED']}
        LayerCakeMapStateData={MockDataCareerBrainstate.MockDataforStateCareerBrain}
        LayerCakeMapMsaData={msaWorkerRatio.msaWorkerRatio}
        />
    );
}

export const ChangeHeight = () => {
    return (
        <LayerCakeMap
        Layer={'msa'}
        height={'500px'}
        LayerCakeMapColor={['#11009E','#4942E4','#8696FE','#C4B0FF']}
        LayerCakeMapStateData={MockDataCareerBrainstate.MockDataforStateCareerBrain}
        LayerCakeMapMsaData={msaWorkerRatio.msaWorkerRatio}
        />
    );
}

export const ChangeHeightAndWidth = () => {
    return (
        <LayerCakeMap
        Layer={'msa'}
        height={'500px'}
        width={'600px'}
        LayerCakeMapColor={['#11009E','#4942E4','#8696FE','#C4B0FF']}
        LayerCakeMapStateData={MockDataCareerBrainstate.MockDataforStateCareerBrain}
        LayerCakeMapMsaData={msaWorkerRatio.msaWorkerRatio}
        />
    );
}