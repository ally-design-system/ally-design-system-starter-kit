import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Breakpoints = () => {
    const data = useStaticQuery(graphql`
        query BreakpointsQuery {
            designTokensJson(name: { eq: "$breakpoints" }) {
                name
            }
        }
    `)

    return (
        <>
            <h2>Design Tokens</h2>
            <h3>{data.designTokensJson.name}</h3>
        </>
    )
}

export default Breakpoints
