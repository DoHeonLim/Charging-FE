import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import Comment, {
  CommentAction,
  CommentAuthor,
  CommentEdited,
  CommentTime,
} from '@atlaskit/comment';

const CarComment = () => {
  return (
    <div>
      <Comment
        avatar={
          <Avatar title='2조 사용자'>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        }
        author={<CommentAuthor>2조 사용자</CommentAuthor>}
        type='author'
        // edited={<CommentEdited>Edited</CommentEdited>}
        // restrictedTo='Restricted to Admins Only'
        time={<CommentTime>Mar 14, 2024</CommentTime>}
        content={<p>이 차는 완전 내취향</p>}
        // actions={[
        //   <CommentAction>Reply</CommentAction>,
        //   <CommentAction>Edit</CommentAction>,
        //   <CommentAction>Like</CommentAction>,
        // ]}
      />
      <Separator className='my-[10px]' />
    </div>
  );
};
export default CarComment;
