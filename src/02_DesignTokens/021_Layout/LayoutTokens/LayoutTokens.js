import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Breakpoints = () => {
    const data = useStaticQuery(graphql`
        query BreakpointsQuery {
            designTokensJson(name: { eq: "$breakpoints" }) {
                name
                mapValue {
                    name
                    compiledValue
                }
            }
        }
    `)

    const Name = data.designTokensJson.name
    const TokenName = Name.substring(1)
    const Capitalize = {
        textTransform: "capitalize",
    }

    const Table = {
        borderCollapse: "collapse",
        border: "3px solid #000013",
        padding: "10px 40px",
        minWidth: "400px",
        textAlign: "left",
    }

    return (
        <section>
            <h3 style={Capitalize}>{TokenName}</h3>
            <table style={Table}>
                <thead>
                    <tr>
                        <th style={Table}>Token</th>
                        <th style={Table}>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {data.designTokensJson.mapValue.map(node => (
                        <>
                            <tr>
                                <td style={Table}>$breakpoint({node.name})</td>
                                <td style={Table}>{node.compiledValue}</td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default Breakpoints
