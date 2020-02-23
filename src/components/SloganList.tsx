import React, { useEffect } from "react"
import { ConnectedProps } from "react-redux"
import { connector } from "../containers/SloganListContainer"

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const SloganList = ({ slogans, loadSlogans }: Props) => {
  useEffect(() => {
    console.log("SloganList")
    loadSlogans()
  }, [loadSlogans])

  return (
    <div>
      <ul>
        {slogans.map(slogan => (
          <li key={slogan.province}>
            {slogan.province} - {slogan.slogan}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SloganList
