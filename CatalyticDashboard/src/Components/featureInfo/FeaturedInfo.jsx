import "./featuredInfo.css";
import React from 'react'
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { useEffect, useState } from 'react'
import {createClient} from 'urql'
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
function FeaturedInfo() {
  const [tokens, setTokens] = useState([])
  useEffect(() => {
    fetchData()
  }, [])
  async function fetchData() {
    const response = await client.query(query).toPromise();
    console.log('response:', response)
    console.log('response:', response.data.accounts.length)
    setTokens(response.data.accounts.length +2013)
  }
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Members</span>
        <div className='featuredContainer'>
          <span className='featuredMember'>{Number(tokens).toLocaleString()}</span>
          <span className='featuredMemberRate'>
            +11.4 <ArrowUpwardIcon className='featuredIcon ' />
          </span>
        </div>
        <div className='featuredSub'>Compared to last Month</div>
      </div>
  
      <div className='featuredItem'>
        <span className='featuredTitle'>Proposal</span>
        <div className='featuredContainer'>
          <span className='featuredMember'>{Number(tokens).toLocaleString()}</span>
          <span className='featuredMemberRate'>
            +11.4 <ArrowUpwardIcon className='featuredIcon ' />
          </span>
        </div>
        <div className='featuredSub'>Compared to last Month</div>
      </div>
     
      <div className='featuredItem'>
        <span className='featuredTitle'>Daily Activity</span>
        <div className='featuredContainer'>
          <span className='featuredMember'>2,415</span>
          <span className='featuredMemberRate'>
           +11.4 <ArrowUpwardIcon className='featuredIcon' />
          </span>
        </div>
        <div className='featuredSub'>Compared to last Month</div>
      </div>
    </div>
  );
}

export default FeaturedInfo;
