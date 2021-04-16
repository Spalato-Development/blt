import { getApolloClient, getPosts } from '@wpengine/headless';
import { usePosts } from '@wpengine/headless/react';
import { gql } from '@apollo/client';
import { getNextStaticProps } from '@wpengine/headless/next';
import { appGetStaticProps } from 'lib/appGetStaticProps';

const Blog = ({ postsData = {} }) => {
  //   console.log('postsData', props);
  const { nodes: posts } = postsData;
  // const posts = usePosts();
  //   console.log('posts', posts);
  return (
    <div>
      <h1>usePosts</h1>
      {posts.map((post) => {
        return (
          <article key={post.id}>
            <h2>{post.title}</h2>
            {/* <p dangerouslySetInnerHTML={{ __html: post.excerpt }} /> */}
            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </article>
        );
      })}
    </div>
  );
};

export const getStaticProps = async (context) => {
  const client = getApolloClient(context);
  //   const postsData = await getPosts(client);
  const globalData = await appGetStaticProps(context);
  const postsData = await getPosts(client, {
    //customizing the query override it ?
    fragments: {
      listPostData: gql`
        fragment listPostData on Post {
          title
          id
          template {
            templateName
          }
        }
      `,
    },
  });
  return {
    props: {
      postsData,
      globalData,
    },
  };

  // const props = await getNextStaticProps(context, {
  //   queries: {
  //     posts: {
  //       fragments: {
  //         listPostData: gql`
  //           fragment listPostData on Post {
  //             title
  //             excerpt
  //             id
  //             template {
  //               templateName
  //             }
  //           }
  //         `,
  //       },
  //     },
  //   },
  // });

  // props.revalidate = 1;

  // return props;
};

export default Blog;
