import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../images/base_font.ttf'
import '../images/FZKTJW.ttf'

const Container = styled.div`
  color:#ccc;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome！</h1>
    <p>yukai.wang</p>
    {/* todo */}
    <div>TODO：</div>
    <ol>
      <li>❌博客整体页面样式</li>
      <li>❌字体</li>
      <li>❌分类</li>
      <li>❌云</li>
    </ol>
    {/* 文章列表 */}
    <div>
      <h1>勿忘我。</h1>
      <h4>共{data.allMarkdownRemark.totalCount}篇文章</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Container key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
            </h3>
            <p>标签：{node.tags}</p>
            <p>{node.excerpt}</p>
          </Link>
        </Container>
      ))}
    </div>
    {/* 开源库 */}
    <h3>了不起的开源库</h3>
    <ol>
      <li>hotkeys 快捷键绑定</li>
    </ol>
  </Layout>
)

export default IndexPage
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
