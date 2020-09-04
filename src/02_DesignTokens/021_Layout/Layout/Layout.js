import React from "react"
import { graphql } from "gatsby"

export default function Layout({ data }) {
    return (
        <>
            <p>Layout Design Tokens</p>
            <p>Breakpoints</p>

            <p>{data.designTokensJson.id}</p>

            {/* {data.designTokensJson.mapValue.map(({ node }, i) => (
                <div key={i}>
                    <p>{node.compiledValue}</p>
                </div>
            ))} */}
        </>
    )
}
export const query = graphql`
    query LayoutDesignTokensQuery {
        designTokensJson(name: { eq: "$breakpoints" }) {
            name
            value
            id
            mapValue {
                compiledValue
            }
        }
    }
`
