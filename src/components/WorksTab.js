import React, {useState} from 'react'
import {Tabs, Tab} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import WorksCoding from './WorksCoding'
import WorksJs from './WorksJs'

const useStyles = makeStyles(() => ({
    tabs: {
       padding: "65px 0 45px"
    },
    tab: {
        minWidth: "100px",
        fontWeight: "bold",
    },
    selected: {
        color:"#77A6D5"
    }
  }));

const WorksTab = () => {
    const classes = useStyles();
    const [selectedTab, setSelectedTab] = useState(0)

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue)
        console.log(newValue)
    }
    return (
    <>
        <Tabs className={classes.tabs} centered value={selectedTab} onChange={handleChange} TabIndicatorProps={ { style: { background: "#333" }} }  >
          <Tab className={classes.tab} label="Coding" />
          <Tab className={classes.tab} label="Javascript" />
        </Tabs>
        { selectedTab === 0 && <WorksCoding /> }
        { selectedTab === 1 && <WorksJs /> }
    </>
    )
}

export default WorksTab
