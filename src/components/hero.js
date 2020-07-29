import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Hero() {
    const data = useStaticQuery(graphql`
        query {
        codingImage: file(relativePath: { eq: "coding.png" }) {
            childImageSharp {
            fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        }
    `)
    return (
        <div className="flex items-center py-24">
            <div className="w-2/4">
                <h1 className="text-4xl font-extrabold">Charaf Boulafaa</h1>
                <p className="text-xl font-semibold my-4">A Software Engineer</p>
                <p>Focused on giving efficient and creative results, and determined to be a integral part of a development team.</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded mt-4 tracking-wide">See Projects</button>
            </div>

            <div className="w-2/4">
                <Img fluid={data.codingImage.childImageSharp.fluid} />
            </div>
        </div>
    )
}