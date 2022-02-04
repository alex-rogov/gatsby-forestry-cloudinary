// import * as React from 'react';
// import type { Props as ProductProps } from 'components/product';
// import PostPreview from 'components/post-preview';
// import { Wrapper, Title, ButtonAllPosts, WrapperPosts, Main } from './index.style';

// type Props = {
//   title: string;
//   description: string;
//   posts: ProductProps[];
// };

// export const Posts: React.FC<Props> = ({ title, posts }) => (
//   <Wrapper>
//     <Main>
//       {title && <Title>{title}</Title>}
//       <ButtonAllPosts withArrow>See all products</ButtonAllPosts>
//     </Main>
//     {posts && (
//       <WrapperPosts>
//         {posts?.map((props) => (
//           <PostPreview {...props} />
//         ))}
//       </WrapperPosts>
//     )}
//   </Wrapper>
// );
