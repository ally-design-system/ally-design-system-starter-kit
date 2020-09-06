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

    const Name = data.designTokensJson.name
    const TokenName = Name.substring(1)
    const Capitalize = {
        textTransform: "capitalize",
    }

    return (
        <>
            <h3 style={Capitalize}>{TokenName}</h3>
        </>
    )
}

export default Breakpoints
