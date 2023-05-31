import React, { useEffect, useState } from 'react'
import * as echarts from 'echarts'
import ReactECharts from 'echarts-for-react'
import geoJSON from '../Mockdata/USA_geo.json'
import msaJSON from '../Mockdata/msas.json'
import MockDataCareerBrainstate from '../Mockdata/MockData_LayercakeMap_CareerBrain_State.json'
import msaWorkerRatio from '../Mockdata/msaWorkerRatio_CareerBrain.json'
// import msaWorkerRatio_purdue from '../../../public/msaWorkerRatio_Purdue.json'
// import MockData_LayercakerMap_Purdue from '../../../public/MockData_LayercakerMap_Purdue.json'
// import MockData_LayerCakeMap_StateMapOption from '../../../public/MockData_LayerCakeMap_StateMapOption.json'
// import MockData_LayerCakeMap_MsaMapOption from '../../../public/MockData_LayerCakeMap_MsaMapOption.json'
// import MockData_LayerCakeMap_StateMapOptionPurdue from '../../../public/MockData_LayerCakeMap_StateMapOptionPurdue.json'
// import MockData_LayerCakeMap_MsaMapOptionPurdue from '../../../public/MockData_LayerCakeMap_MsaMapOptionPurdue.json'
import { Box } from '@mui/material'

echarts.registerMap('StateMap', geoJSON)
echarts.registerMap('MsaMap', msaJSON)

export default function Map( {Layer,width, height,LayerCakeMapColor, LayerCakeMapStateData, LayerCakeMapMsaData}) {
  const [showMap, SetShowMap] = useState(false)
  const [selectedState, setSelectedState] = useState(null);

  const Layercolor = LayerCakeMapColor || ['#3283cd', '#468fd2', '#5a9cd7', '#6fa8dc', '#84b4e1', '#98c1e6', '#adcdeb'];
 
    let stateOption = {
    title: {
      text: 'Workforce Size and workers / posting by Location',
      subtext: 'Data from emsibg',
      sublink: 'http://www.census.gov/popest/data/datasets.html',
      left: 'right',
    },
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: (params, extraparam) => {
        var item0 = params.name
        var item1 = 'Workers per postings for category : ' + params.data.WorkersPerPostingsCount
        var item2 = 'Workers per posting : ' + params.data.workersPerPosting
        var item3 = 'Ratio : ' + params.data.ratio
        var item4 = 'postings : ' + params.data.postings
        return 'All Occupation' + '<br>' + item0 + '<br>' + item1 + '<br>' + item2 + '<br>' + item3 + '<br>' + item4
      },
    },
    visualMap: {
      left: 'right',
      min: 1,
      max: 3,
      color: Layercolor,
      text: ['High', 'Low'],
      calculable: true,
    },
    toolbox: {
      show: true,
      left: 'left',
      top: 'top',
      feature: {
        mark: { show: true },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    emphasis: {
      label: {
        show: true,
      },
      itemStyle: {
        areaColor: selectedState ? '#dcdcdc' : '#c0c0c0',
      },
    },
    selectedMode: 'single',
    // Handle state click event
    events: {
      click: (params) => {
        const clickedState = params.name;
        setSelectedState(clickedState);
      },
    },
    series: [
      {
        name: 'USA PopEstimates',
        type: 'map',
        nameProperty: 'name',
        map: 'USA',
        itemStyle: {
          emphasis: { label: { show: true } },
        },
        data: LayerCakeMapStateData || MockDataCareerBrainstate.MockDataforStateCareerBrain,
       }
    ],
  }
  
  //@ts-ignore
  let msaOption = {
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: (params) => {
        console.log(params)
        var item0 = params.name
        try {
          var item1 = 'Occupation name : ' + params.data.occupation
        } catch {
          var item1 = 'Occupation name : ' + 'NIL'
        }
        try {
          var item2 = 'Workers per posting : ' + params.data.workersPerPosting
        } catch {
          var item2 = 'Workers per posting : ' + 'NIL'
        }
  
        try {
          var item3 = 'Ratio : ' + params.data.ratio
        } catch {
          var item3 = 'Ratio : ' + 'NIL'
        }
        return 'All Occupation' + '<br>' + item0 + '<br>' + item1 + '<br>' + item2 + '<br>' + item3
      },
    },
    visualMap: {
      left: 'right',
      min: 0,
      max: 2,
      color: Layercolor,
      text: ['High', 'Low'],
      calculable: true,
    },
    toolbox: {
      show: true,
      left: 'left',
      top: 'top',
      feature: {
        mark: { show: true },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: 'USA County PopEstimates',
        type: 'map',
        nameProperty: 'name',
        map: 'MSA',
        itemStyle: {
          emphasis: { label: { show: true } },
        },
        data: LayerCakeMapMsaData || msaWorkerRatio.msaWorkerRatio,
      }
    ],
  }
  
  // const stateMapOption = {
  //   title: {
  //     text: 'Workers Demand & Supply - Statistics',
  //     left: 'right',
  //   },
  //   tooltip: {
  //     trigger: 'item',
  //     showDelay: 0,
  //     transitionDuration: 0.2,
  //     formatter: (params, extraparam) => {
  //       var item0 = params.name
  //       try {
  //         var item1 = 'Supply Demand Ratio : ' + params.data.supplydemandratio
  //       } catch {
  //         var item1 = 'Supply Demand Ratio : ' + 'NA'
  //       }
  //       try {
  //         var item2 = 'Total Job Postings : ' + params.data.totaljobpostings
  //       } catch {
  //         var item2 = 'Total Job Postings : ' + 'NA'
  //       }

  //       try {
  //         var item3 = 'Workers In Role : ' + params.data.workersinrole
  //       } catch {
  //         var item3 = 'Workers In Role : ' + 'NA'
  //       }
  //       try {
  //         var item4 = 'Average Salary : ' + params.data.averagesalary
  //       } catch {
  //         var item4 = 'Average Salary : ' + 'NA'
  //       }
  //       return (
  //         'Supply Demand for this location' +
  //         '<br>' +
  //         item0 +
  //         '<br>' +
  //         item1 +
  //         '<br>' +
  //         item2 +
  //         '<br>' +
  //         item3 +
  //         '<br>' +
  //         item4
  //       )
  //     },
  //   },
  //   visualMap: {
  //     show: false,
  //     left: 'right',
  //     min: 1000,
  //     max: 6000,
  //     color: Layercolor,
  //     text: ['High Demand', 'Low Demand'],
  //     calculable: true,
  //   },
  //   toolbox: {
  //     show: true,
  //     left: 'left',
  //     top: 'top',
  //     feature: {
  //       mark: { show: true },
  //       restore: { show: true },
  //       saveAsImage: { show: true },
  //     },
  //   },
  //   series: [
  //     {
  //       name: 'USA PopEstimates',
  //       type: 'map',
  //       nameProperty: 'name',
  //       map: 'StateMap',
  //       itemStyle: {
  //         emphasis: { label: { show: true } },
  //       },
  //       textFixed: {
  //         Alaska: [20, -20],
  //       },
  //       data: LayerCakeMapStateData || MockData_LayerCakeMap_StateMapOption.SupplyDemandRatio
  //     },
  //   ],
  // }

  // //@ts-ignore
  // let msaMapOption = {
  //   visualMap: {
  //     left: 'right',
  //     min: 0,
  //     max: 2,
  //     color: Layercolor,
  //     text: ['High', 'Low'],
  //     calculable: true,
  //   },
  //   series: [
  //     {
  //       name: 'USA County PopEstimates',
  //       type: 'map',
  //       nameProperty: 'name',
  //       map: 'MsaMap',
  //       itemStyle: {
  //         emphasis: { label: { show: true } },
  //       },
  //       data: LayerCakeMapMsaData || MockData_LayerCakeMap_MsaMapOption.SupplyDemandRatio,
  //     },
  //   ],
  // }

  // const stateOptionPurdue = {
  //   title: {
  //     text: 'Workforce Size and Demand by Location in 2021',
  //     subtext: 'Data from Lightcast',
  //     sublink: 'http://www.census.gov/popest/data/datasets.html',
  //     left: 'right',
  //   },
  //   tooltip: {
  //     trigger: 'item',
  //     showDelay: 0,
  //     transitionDuration: 0.2,
  //     formatter: (params) => {
  //       var item0 = params.name
  //       var item1 = 'Workers per postings for category : ' + params.data.WorkersPerPostingsCount
  //       var item2 = 'Workers per posting : ' + params.data.workersPerPosting
  //       var item3 = 'Ratio : ' + params.data.ratio
  //       var item4 = 'postings : ' + params.data.postings
  //       return 'All Occupation' + '<br>' + item0 + '<br>' + item1 + '<br>' + item2 + '<br>' + item3 + '<br>' + item4
  //     },
  //   },
  //   visualMap: {
  //     left: 'right',
  //     min: 50,
  //     max: 150,
  //     color: Layercolor,
  //     text: ['High Demand', 'Low Demand'],
  //     calculable: true,
  //   },
  //   toolbox: {
  //     show: true,
  //     left: 'left',
  //     top: 'top',
  //     feature: {
  //       mark: { show: true },
  //       restore: { show: true },
  //       saveAsImage: { show: true },
  //     },
  //   },
  //   series: [
  //     {
  //       name: 'USA PopEstimates',
  //       type: 'map',
  //       nameProperty: 'name',
  //       map: 'USA',
  //       itemStyle: {
  //         emphasis: { label: { show: true } },
  //       },
  //       data: LayerCakeMapStateData || MockData_LayercakerMap_Purdue.mockDataForStatePurdue,
  //     },
  //   ],
  // }

  // //@ts-ignore
  // let msaOptionPurdue = {
  //   tooltip: {
  //     trigger: 'item',
  //     showDelay: 0,
  //     transitionDuration: 0.2,
  //     formatter: (params) => {
  //       console.log(params)
  //       var item0 = params.name
  //       try {
  //         var item1 = 'Occupation name : ' + params.data.occupation
  //       } catch {
  //         var item1 = 'Occupation name : ' + 'NIL'
  //       }
  //       try {
  //         var item2 = 'Workers per posting : ' + params.data.workersPerPosting
  //       } catch {
  //         var item2 = 'Workers per posting : ' + 'NIL'
  //       }

  //       try {
  //         var item3 = 'Ratio : ' + params.data.ratio
  //       } catch {
  //         var item3 = 'Ratio : ' + 'NIL'
  //       }
  //       return 'All Occupation' + '<br>' + item0 + '<br>' + item1 + '<br>' + item2 + '<br>' + item3
  //     },
  //   },
  //   visualMap: {
  //     left: 'right',
  //     min: 0,
  //     max: 3,
  //     color: Layercolor,
  //     text: ['High', 'Low'],
  //     calculable: true,
  //   },
  //   toolbox: {
  //     show: true,
  //     left: 'left',
  //     top: 'top',
  //     feature: {
  //       mark: { show: true },
  //       restore: { show: true },
  //       saveAsImage: { show: true },
  //     },
  //   },
  //   series: [
  //     {
  //       name: 'USA County PopEstimates',
  //       type: 'map',
  //       nameProperty: 'name',
  //       map: 'MSA',
  //       itemStyle: {
  //         emphasis: { label: { show: true } },
  //       },
  //       data: LayerCakeMapMsaData || msaWorkerRatio_purdue.msaWorkerRatio,
  //     },
  //   ],
  // }

  // const stateMapOptionPurdue = {
  //   title: {
  //     text: 'Workers Demand & Supply - Statistics',
  //     left: 'right',
  //   },
  //   tooltip: {
  //     trigger: 'item',
  //     showDelay: 0,
  //     transitionDuration: 0.2,
  //     formatter: (params, extraparam) => {
  //       var item0 = params.name
  //       try {
  //         var item1 = 'Supply Demand Ratio : ' + params.data.supplydemandratio
  //       } catch {
  //         var item1 = 'Supply Demand Ratio : ' + 'NA'
  //       }
  //       try {
  //         var item2 = 'Total Job Postings : ' + params.data.totaljobpostings
  //       } catch {
  //         var item2 = 'Total Job Postings : ' + 'NA'
  //       }

  //       try {
  //         var item3 = 'Workers In Role : ' + params.data.workersinrole
  //       } catch {
  //         var item3 = 'Workers In Role : ' + 'NA'
  //       }
  //       try {
  //         var item4 = 'Average Salary : ' + params.data.averagesalary
  //       } catch {
  //         var item4 = 'Average Salary : ' + 'NA'
  //       }
  //       return (
  //         'Supply Demand for this location' +
  //         '<br>' +
  //         item0 +
  //         '<br>' +
  //         item1 +
  //         '<br>' +
  //         item2 +
  //         '<br>' +
  //         item3 +
  //         '<br>' +
  //         item4
  //       )
  //     },
  //   },
  //   visualMap: {
  //     show: false,
  //     left: 'right',
  //     min: 1000,
  //     max: 6000,
  //     color:Layercolor,
  //     text: ['High Demand', 'Low Demand'],
  //     calculable: true,
  //   },
  //   toolbox: {
  //     show: true,
  //     left: 'left',
  //     top: 'top',
  //     feature: {
  //       mark: { show: true },
  //       restore: { show: true },
  //       saveAsImage: { show: true },
  //     },
  //   },
  //   series: [
  //     {
  //       name: 'USA PopEstimates',
  //       type: 'map',
  //       nameProperty: 'name',
  //       map: 'StateMap',
  //       itemStyle: {
  //         emphasis: { label: { show: true } },
  //       },
  //       textFixed: {
  //         Alaska: [20, -20],
  //       },
  //       data: LayerCakeMapStateData || MockData_LayerCakeMap_StateMapOptionPurdue.SupplyDemandRatio
  //     },
  //   ],
  // }

  // //@ts-ignore
  // let msaMapOptionPurdue = {
  //   series: [
  //     {
  //       name: 'USA County PopEstimates',
  //       type: 'map',
  //       nameProperty: 'name',
  //       map: 'MsaMap',
  //       itemStyle: {
  //         emphasis: { label: { show: true } },
  //       },
  //       data: LayerCakeMapMsaData || MockData_LayerCakeMap_MsaMapOptionPurdue.SupplyDemandRatio,
  //     },
  //   ],
  //   visualMap: {
  //     left: 'right',
  //     min: 0,
  //     max: 2,
  //     color: Layercolor,
  //     text: ['High', 'Low'],
  //     calculable: true,
  //   },
  // }

  useEffect(() => {
    echarts.registerMap('USA', geoJSON, {
      Alaska: {     
        left: -129,
        top: 20,
        width: 19
      },
      Hawaii: {
        left: -106,
        top: 20,
        width: 5
      },
      'Puerto Rico': {     
        left: -76,
        top: 20,
        width: 2
      }
    });
    echarts.registerMap('MSA', msaJSON, {
      'Anchorage, AK': {     
        left: -119,
        top: 25,
        width: 4.3
      },
      'Fairbanks, AK': {
        left: -115,
        top: 27,
        width: 3
      },
      'Juneau, AK': {     
        left: -107,
        top: 22,
        width: 2
      },
    'Ketchikan, AK': {     
        left: -109,
        top: 24,
        width: 2
      },
    'Kapaa, HI': {     
        left: -102,
        top: 25,
        width: 2
      },
    'Urban Honolulu, HI': {     
        left: -100,
        top: 24,
        width: 2
      },
    'Kahului-Wailuku-Lahaina, HI': {     
        left: -98,
        top: 23,
        width: 2
      },
    'Hilo, HI': {     
        left: -96,
        top: 21,
        width: 2
      },
    'Ponce, PR': {     
        left: -79,
        top: 20.5,
        width: 1
      },
    'Aguadilla-Isabela, PR': {     
        left: -78.9,
        top: 20.4,
        width: 1
      },
    'San Juan-Carolina-Caguas, PR': {     
        left: -78.8,
        top: 20,
        width: 1
      },
    'San Germán, PR': {     
        left: -78.7,
        top: 19.9,
        width: 1
      },
    'Arecibo, PR': {     
        left: -78.6,
        top: 19.8,
        width: 1
      },
      'Coco, PR': {     
        left: -78.5,
        top: 19.7,
        width: 1
      },
    'Mayagüez, PR': {     
        left: -78.4,
        top: 19.6,
        width: 1
      },
    'Jayuya, PR': {     
        left: -78.3,
        top: 19.5,
        width: 1
      },
    'Adjuntas, PR': {     
        left: -78.2,
        top: 19.4,
        width: 1
      },
    'Coamo, PR': {     
        left: -78.1,
        top: 19.45,
        width: 1
      },
      'Guayama, PR': {     
        left: -78,
        top: 19.35,
        width: 1
      }
  
    });
    SetShowMap(true)
  }, [])

  const style = {
    width: width || '50%',
    height: height || '400px'
  }

  return (
    <>
      {showMap ? (
        <Box sx={{ display: 'flex', m: 'auto', width: '100%', pt: 2 }}>
          {String(Layer) != 'msa' ? (
            <ReactECharts
              option={stateOption}
              notMerge={false}
              lazyUpdate={true}
              style={{ width: '50%', height: '400px' }}
            />
          ) : (
            <ReactECharts
              option={msaOption}
              notMerge={false}
              lazyUpdate={true}
              style={{ width: '50%', height: '400px' }}
            />
          )}
        </Box>
      ) : (
        <></>
      )}
    </>
  );
}
