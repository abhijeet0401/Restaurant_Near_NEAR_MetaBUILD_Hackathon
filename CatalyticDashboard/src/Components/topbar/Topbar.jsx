import React from "react";
import { useEffect, useState } from 'react'
import {login, logout} from '../../utils'
import SettingsIcon from "@material-ui/icons/Settings";
import LanguageIcon from "@material-ui/icons/Language";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Button from '@mui/material/Button';
import {createClient} from 'urql'
import "./topbar.css";
const APIURL = "https://api.thegraph.com/subgraphs/name/abhijeet0401/hackathonsubmission"

const query = `
  query {
    accounts(firsst: 5) {
      id
      signerId
      log {
        id
      }
    }
  }
`
const client = createClient({
  url: APIURL
})
function Topbar() {
  const [tokens, setTokens] = useState([])
  useEffect(() => {
    fetchData()
  }, [])
  async function fetchData() {
    const response = await client.query(query).toPromise();
    console.log('response:', response)
    console.log('response:', response.data.accounts.length)
    setTokens(response.data.accounts.length)
  }
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>Catalyst</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconsContainer'>
            <NotificationsNoneIcon className='topIcon' />
            <span className='topIconBadge'>{tokens}</span>
          </div>
          <div className='topbarIconsContainer'>
            <LanguageIcon className='topIcon' />
            <span className='topIconBadge'>{tokens}</span>
          </div>
          <img
            src='https://www.looper.com/img/gallery/what-the-mistakes-in-rick-morty-could-really-mean/intro-1617842307.jpg'
            alt=''
            className='avatar'
          />
          {/* <SettingsIcon className='topIcon' /> */}
          <Button color="inherit" onClick={(window.accountId==='')?login:logout}>{(window.accountId==='')?'Login':window.accountId}</Button>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
