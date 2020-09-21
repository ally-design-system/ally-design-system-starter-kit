import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const FontWeights = () => {
    const data = useStaticQuery(graphql`
        query FontWeightsQuery {
            designTokensJson(name: { eq: "$font-weights" }) {
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
    const Title = {
        textTransform: "capitalize",
        marginTop: "80px",
        lineHeight: "1",
    }

    return (
        <section>
            <h3 style={Title}>{TokenName}</h3>
            <p>Description.</p>

            <div
                style={{
                    marginBottom: "-20px",
                }}
            >
                {data.designTokensJson.mapValue.map(node => (
                    <p
                        style={{
                            fontWeight: `${node.compiledValue}`,
                            fontSize: "2rem",
                            lineHeight: 1,
                        }}
                    >
                        Weight {node.compiledValue}
                        <span
                            style={{
                                fontWeight: 700,
                                fontSize: "1.125rem",
                                marginLeft: "14px",
                            }}
                        >
                            font-weight({node.name})
                        </span>
                    </p>
                ))}
            </div>

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
                                    font-weight({node.name})
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
                                        font-weight: font-weight(
                                        {node.name});
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

export default FontWeights
