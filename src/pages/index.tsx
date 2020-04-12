import Layout from "../components/Layout";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 40px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Article = styled.article`
  padding: 40px 0;
`;

const H1 = styled.h1`
  font-size: 2em;
  margin-bottom: 16px;
  font-family: "M PLUS Rounded 1c";
`;

const Anchor = styled.a`
  margin: 0 8px;
  text-decoration: none;
  color: #0366D6;
  &:hover {
    text-decoration: underline;
  }
`;

const getGists = () => {
  return [
    {
      "html_url": "https://gist.github.com/bc182b5140c6b130a707d272072e4aee",
      "description": "自宅の作業環境について",
      "updated_at": "2020-04-06T07:49:18Z",
    },
    {
      "html_url": "https://gist.github.com/bc182b5140c6b130a707d272072e4aee",
      "description": "自宅の作業環境について",
      "updated_at": "2020-04-06T07:49:18Z",
    },
    {
      "html_url": "https://gist.github.com/bc182b5140c6b130a707d272072e4aee",
      "description": "自宅の作業環境について",
      "updated_at": "2020-04-06T07:49:18Z",
    },
    {
      "html_url": "https://gist.github.com/bc182b5140c6b130a707d272072e4aee",
      "description": "自宅の作業環境について",
      "updated_at": "2020-04-06T07:49:18Z",
    }
  ];
};

const LastUpdated = styled.p`
  font-size: 1.2em;
  font-family: 'Open Sans', sans-serif;
`;


const IndexPage = () => (
  <Layout title="enoguLabs">
    <Wrapper>
      {getGists().map(({ html_url, description, updated_at }) => (
        <Article>
          <H1>
            <Anchor rel="noopener" target="_blank" href={html_url}>
              {description}
            </Anchor>
          </H1>
          <LastUpdated>Last active: <time>{new Date(updated_at).toLocaleString("ja")}</time></LastUpdated>
        </Article>
      ))}
    </Wrapper>
  </Layout>
);

export default IndexPage;
