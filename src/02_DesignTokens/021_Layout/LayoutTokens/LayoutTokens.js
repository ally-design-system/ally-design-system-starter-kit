import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const LayoutTokens = () => {
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

    return (
        <section>
            <h3 style={Capitalize}>{TokenName}</h3>
            <table
                className="docblock-argstable css-6hhrgj"
                style={{ textAlign: "left" }}
            >
                <thead className="docblock-argstable-head">
                    <tr>
                        <th>Token</th>
                        <th>Value</th>
                        <th>Default</th>
                        <th style={{ width: "50% !important" }}>Use</th>
                    </tr>
                </thead>
                <tbody className="docblock-argstable-body">
                    {data.designTokensJson.mapValue.map(node => (
                        <tr>
                            <td className="css-4lbn0a">
                                <span className="css-in3yi3">
                                    $breakpoint({node.name})
                                </span>
                            </td>
                            <td>
                                <div className="css-1521b8c">
                                    <span>{node.compiledValue}</span>
                                </div>
                                <div className="css-fimcbu"></div>
                            </td>
                            <td style={{ width: "0" }}>
                                <span>-</span>
                            </td>
                            <td style={{ width: "50% !important" }}>
                                <pre style={{ margin: 0 }}>
                                    <code>
                                        @media (min-width: breakpoint(
                                        {node.name}))
                                    </code>
                                </pre>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default LayoutTokens
