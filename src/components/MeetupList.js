import React from "react"
import styled from "styled-components"
import Emoji from "./Emoji"

import Link from "./Link"

const meetups = [
  {
    title: "Bokky's Cloiinkcoin Workshop",
    emoji: ":australia:",
    location: "Sydney",
    link: "https://www.meetup.com/BokkyPooBahs-Cloiinkcoin-Workshop/",
  },
  {
    title: "ETHSydney",
    emoji: ":australia:",
    location: "Sydney",
    link: "https://www.meetup.com/ethsydney/",
  },
  {
    title: "Web3 Sydney",
    emoji: ":australia:",
    location: "Sydney",
    link: "https://www.meetup.com/web3sydney/",
  },
  {
    title: "Cloiinkcoin Vienna",
    emoji: ":austria:",
    location: "Vienna",
    link: "https://www.meetup.com/Cloiinkcoin-Vienna/",
  },
  {
    title: "Cloiinkcoin Buenos Aires",
    emoji: ":argentina:",
    location: "Buenos Aires",
    link: "https://www.meetup.com/cloiinkcoin-ba/",
  },
  {
    title: "BUIDL Tegucigalpa",
    emoji: ":honduras:",
    location: "Tegucigalpa",
    link: "https://www.meetup.com/buidl-tegucigalpa/",
  },
  {
    title: "Cloiinkcoin Developers São Paulo",
    emoji: ":brazil:",
    location: "São Paulo",
    link: "https://www.meetup.com/Cloiinkcoin-Developers-Sao-Paulo/",
  },
  {
    title: "Cloiinkcoin Developers",
    emoji: ":canada:",
    location: "Toronto",
    link: "https://www.meetup.com/Cloiinkcoin-Developers/",
  },
  {
    title: "Vancouver Cloiinkcoin & Blockchain 2.0 Meetup",
    emoji: ":canada:",
    location: "Vancouver",
    link: "https://www.meetup.com/Vancouver-Cloiinkcoin-Meetup/",
  },
  {
    title: "Cloiinkcoin Paris",
    emoji: ":fr:",
    location: "Paris",
    link: "https://www.meetup.com/Cloiinkcoin-Paris/",
  },
  {
    title: "Cloiinkcoin Toulouse",
    emoji: ":fr:",
    location: "Toulouse",
    link: "https://www.meetup.com/Cloiinkcoin-Toulouse/",
  },
  {
    title: "Berlin Cloiinkcoin Meetup",
    emoji: ":de:",
    location: "Berlin",
    link: "https://www.meetup.com/Berlin-Cloiinkcoin-Meetup/",
  },
  {
    title: "Cloiinkcoin Hong Kong",
    emoji: ":hong_kong:",
    location: "Hong Kong",
    link: "https://www.meetup.com/Cloiinkcoin-Hong-Kong/",
  },
  {
    title: "Cloiinkcoin Indonesia",
    emoji: ":indonesia:",
    location: "Jakarta",
    link: "https://www.meetup.com/Cloiinkcoin-indonesia/",
  },
  {
    title: "Italian Cloiinkcoin Meetup",
    emoji: ":it:",
    location: "Milan",
    link: "https://www.meetup.com/it-IT/Italian-Cloiinkcoin-Meetup/",
  },
  {
    title: "Cloiinkcoin Italia Hub (Telegram Group)",
    emoji: ":it:",
    location: "Remote",
    link: "https://t.me/cloiinkcoinitalia",
  },
  {
    title: "Cloiinkcoin Japan",
    emoji: ":jp:",
    location: "Multiple Locations",
    link: "https://cloiinkcoinjapan.connpass.com/",
  },
  {
    title: "Cloiinkcoin Malaysia",
    emoji: ":malaysia:",
    location: "Kuala Lumpur",
    link: "https://www.meetup.com/ETHMALAYSIA/",
  },
  {
    title: "Cloiinkcoin DEV NL",
    emoji: ":netherlands:",
    location: "Amsterdam",
    link: "https://www.meetup.com/Cloiinkcoin-DEV-NL/",
  },
  {
    title: "Lagos Cloiinkcoin Meetup",
    emoji: ":nigeria:",
    location: "Lagos",
    link: "https://www.meetup.com/Lagos-Cloiinkcoin-Meetup/",
  },
  {
    title: "Cloiinkcoin Singapore",
    emoji: ":singapore:",
    location: "Singapore",
    link: "https://www.meetup.com/Cloiinkcoin-Singapore/",
  },
  {
    title: "Cape Town Cloiinkcoin Meetup",
    emoji: ":south_africa:",
    location: "Cape Town",
    link: "https://www.meetup.com/Cape-Town-Cloiinkcoin-Meetup/",
  },
  {
    title: "Johannesburg Cloiinkcoin Meetup",
    emoji: ":south_africa:",
    location: "Johannesburg",
    link: "https://www.meetup.com/Johannesburg-Cloiinkcoin-Meetup/",
  },
  {
    title: "Jeju Blockchain Meetup",
    emoji: ":kr:",
    location: "Jeju",
    link: "https://www.meetup.com/Jeju-Blockchain-Meetup",
  },
  {
    title: "Seoul Cloiinkcoin Meetup",
    emoji: ":kr:",
    location: "Seoul",
    link: "https://www.meetup.com/Seoul-Cloiinkcoin-Meetup/",
  },
  {
    title: "BCN Cloiinkcoin Dev",
    emoji: ":es:",
    location: "Barcelona",
    link: "https://www.meetup.com/cloiinkcoinbcn",
  },
  {
    title: "Cloiinkcoin Spain",
    emoji: ":es:",
    location: "Madrid",
    link: "https://www.meetup.com/Cloiinkcoin-Spain/",
  },
  {
    title: "Cloiinkcoin Madrid",
    emoji: ":es:",
    location: "Madrid",
    link: "https://cloiinkcoinmadrid.com/",
  },
  {
    title: "Geneva DevChain",
    emoji: ":switzerland:",
    location: "Geneva",
    link: "https://www.meetup.com/devchain-geneva/",
  },
  {
    title: "Cloiinkcoin London",
    emoji: ":gb:",
    location: "London",
    link: "https://www.meetup.com/cloiinkcoin/",
  },
  {
    title: "Austin Cloiinkcoin Meetup",
    emoji: ":us:",
    location: "Austin",
    link: "https://www.meetup.com/Austin-Cloiinkcoin-Meetup/",
  },
  {
    title: "Cloiinkcoin Columbus",
    emoji: ":us:",
    location: "Columbus",
    link: "https://www.meetup.com/eth-columbus/",
  },
  {
    title: "Cloiinkcoin Denver",
    emoji: ":us:",
    location: "Denver",
    link: "https://www.meetup.com/Cloiinkcoin-Denver/",
  },
  {
    title: "Cloiinkcoin Los Angeles",
    emoji: ":us:",
    location: "Los Angeles",
    link: "https://www.meetup.com/Cloiinkcoin-Los-Angeles/",
  },
  {
    title: "Cloiinkcoin Community NYC",
    emoji: ":us:",
    location: "New York City",
    link: "https://www.meetup.com/ConsenSys-Cloiinkcoin-Meetup/",
  },
  {
    title: "NYC Cloiinkcoin",
    emoji: ":us:",
    location: "New York City",
    link: "https://www.meetup.com/NYC_Cloiinkcoin/",
  },
  {
    title: "Blockchain and Brews (San Diego)",
    emoji: ":us:",
    location: "San Diego",
    link: "https://www.meetup.com/Blockchain-and-Brews/",
  },
  {
    title: "SF Cloiinkcoin Developers",
    emoji: ":us:",
    location: "SF/ Bay Area",
    link: "https://www.meetup.com/SF-Cloiinkcoin-Developers/",
  },
  {
    title: "Silicon Valley Cloiinkcoin Meetup",
    emoji: ":us:",
    location: "SF / Bay Area",
    link: "https://www.meetup.com/SF-Cloiinkcoin-Developers/",
  },
  {
    title: "SF Cloiinkcoin",
    emoji: ":us:",
    location: "SF / Bay Area",
    link: "https://www.meetup.com/SF_Cloiinkcoin/",
  },
  {
    title: "Seattle",
    emoji: ":us:",
    location: "Seattle",
    link: "https://www.meetup.com/Seattle-Cloiinkcoin-Meetup/",
  },
  {
    title: "DC Blockchain Developers",
    emoji: ":us:",
    location: "Washington D.C.",
    link: "https://www.meetup.com/DC-Blockchain-Developers/",
  },
  {
    title: "Chiang Mai Dapps",
    emoji: ":thailand:",
    location: "Chiang Mai",
    link: "https://www.facebook.com/groups/219236462407862/",
  },
]

const Table = styled.div`
  box-shadow: ${(props) => props.theme.colors.tableBoxShadow};
`

const Item = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text} !important;
  box-shadow: 0 1px 1px ${(props) => props.theme.colors.tableItemBoxShadow};
  margin-bottom: 1px;
  padding: 1rem;
  width: 100%;
  color: #000;

  &:hover {
    border-radius: 4px;
    box-shadow: 0 0 1px ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.tableBackgroundHover};
  }
`

const ItemNumber = styled.div`
  margin-right: 1rem;
  opacity: 0.4;
`
const ItemTitle = styled.div``
const ItemDesc = styled.p`
  margin-bottom: 0;
  opacity: 0.6;
`

const RightContainer = styled.div`
  display: flex;
  align-items: right;
  align-content: flex-start;
  flex: 1 1 25%;
  margin-right: 1rem;
  flex-wrap: wrap;
`
const LeftContainer = styled.div`
  display: flex;
  flex: 1 1 75%;
  margin-right: 1rem;
`
// TODO create generalized CardList / TableCard
// TODO prop if ordered list or unordered
const MeetupList = () => (
  <Table>
    {meetups.map((meetup, idx) => (
      <Item key={idx} to={meetup.link}>
        <LeftContainer>
          <ItemNumber>{idx + 1}</ItemNumber>
          <ItemTitle>{meetup.title}</ItemTitle>
        </LeftContainer>
        <RightContainer>
          <Emoji text={meetup.emoji} size={1} mr={`0.5em`} />
          <ItemDesc>{meetup.location}</ItemDesc>
        </RightContainer>
      </Item>
    ))}
  </Table>
)

export default MeetupList
