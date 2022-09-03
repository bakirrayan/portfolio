import React, {useState} from 'react';
import "../styles/home.css";
import Thm from '../components/Thm';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';


function Home() {
  const [expanded, setExpanded] = useState([]);
  

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleExpandClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0 ? ['1', '10', '16', '17', '24', '29', '36'] : [],
    );
  };
  return (
    <div className='home'>
      <div className='about'>
        <h1>Rayan Bakir</h1>
        <div className="prompt">
          <p>Hey there 👋 I am an automatics and systems engineer.</p>
        </div>
      </div>

      <div className='container'>
        <div className='container-child'>
          <h2>Bio</h2>
          <span>it's me</span>
        </div>
        <div className='container-child'>
          <h2>skills</h2>
          <Box sx={{ width: 150}}>
            <Box>
              <Button onClick={handleExpandClick}>
                {expanded.length === 0 ? 'Expand all' : 'Collapse all'}
              </Button>
            </Box>
            <TreeView
              aria-label="controlled"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              expanded={expanded}
              onNodeToggle={handleToggle}
              multiSelect
              
            >
              <TreeItem nodeId="1" label="DevOps">
                <TreeItem nodeId="2" label="Kubernetes" />
                <TreeItem nodeId="3" label="Jenkins" />
                <TreeItem nodeId="4" label="Docker/Docker Compose" />
                <TreeItem nodeId="5" label="Minikube" />
                <TreeItem nodeId="6" label="AWS" />
                <TreeItem nodeId="7" label="Grafana" />
                <TreeItem nodeId="8" label="Prometheus" />
                <TreeItem nodeId="9" label="Helm" />
              </TreeItem>
              <TreeItem nodeId="10" label="Robotic">
                <TreeItem nodeId="11" label="Arduino" />
                <TreeItem nodeId="12" label="Raspberry Pi" />
                <TreeItem nodeId="13" label="ESP32" />
                <TreeItem nodeId="14" label="Arduino IDE" />
                <TreeItem nodeId="15" label="ROS (Robot Operating System)" />
              </TreeItem>
              <TreeItem nodeId="16" label="Web Development">
                <TreeItem nodeId="17" label="Front-end">
                  <TreeItem nodeId="18" label="ReactJS" />
                  <TreeItem nodeId="19" label="NPM" />
                  <TreeItem nodeId="20" label="MaterialUI" />
                  <TreeItem nodeId="22" label="HTML" />
                  <TreeItem nodeId="23" label="CSS" />
                </TreeItem>
                <TreeItem nodeId="24" label="Back-end">
                  <TreeItem nodeId="25" label="Flask" />
                  <TreeItem nodeId="26" label="Django" />
                  <TreeItem nodeId="27" label="MySQL" />
                  <TreeItem nodeId="28" label="SQLite" />
                </TreeItem>
              </TreeItem>
              <TreeItem nodeId="29" label="Programming Languages">
                <TreeItem nodeId="30" label="Python" />
                <TreeItem nodeId="31" label="C#" />
                <TreeItem nodeId="32" label="C++" />
                <TreeItem nodeId="33" label="PHP" />
                <TreeItem nodeId="34" label="JavaScript" />
                <TreeItem nodeId="35" label="Bash" />
              </TreeItem>
              <TreeItem nodeId="36" label="CAO (Computer-aided design)">
                <TreeItem nodeId="37" label="Solidworks" />
                <TreeItem nodeId="38" label="Autodesk Fusion360" />
              </TreeItem>
            </TreeView>
          </Box>
        </div>
        <div className='container-child'>
          <h2>Spare time</h2>
          <ol className='list'>
            <li>Designing robots</li>
            <li>Playing video games</li>
            <li>Watching movies</li>
            <li>Creation of web applications</li>
            <li>trying new technologies</li>
            <li>Coding games like <a href='https://exercism.org/profiles/Bakir-Rayan'>
              Exercism</a></li>
            <li>CTF's like TryHackMe ▼ <Thm /></li>
          </ol>
        </div>
      </div>
      
        
    
    </div>
  )
}

export default Home