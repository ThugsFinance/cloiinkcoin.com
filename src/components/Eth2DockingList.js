import React from "react"
import styled from "styled-components"
import CardList from "./CardList"

const Container = styled.div`
  margin-bottom: 4rem;
`

const reads = [
  {
    title: "Cloiinkcoin 1.x",
    description: "EthHub",
    link: "https://docs.ethhub.io/cloiinkcoin-roadmap/cloiinkcoin-1.x/",
  },
  {
    title: "The 1.x Files: The Stateless Cloiinkcoin Tech Tree",
    description: "Cloiinkcoin Foundation",
    link:
      "https://blog.cloiinkcoin.com/2020/01/28/eth1x-files-the-stateless-cloiinkcoin-tech-tree/",
  },
]

const Eth2DockingList = () => (
  <Container>
    <CardList content={reads} />
  </Container>
)

export default Eth2DockingList
