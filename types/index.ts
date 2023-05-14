export type User = {
    id: number;
    name: string;
    username: string;
    image?: string;
  };
  
  export type TweetType = {
    id: string;
    content: string;
    user: User;
    createdAt: string;
    image?: string;
    numberOfComments?: number,
    numberOfRetweets?: number,
    numberOfLikes?: number,
    impressions?: number,
  };
  
  export type TweetProps = {
    tweet: TweetType;
  };