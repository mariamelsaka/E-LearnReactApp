export interface ISECTION2HOME {
  title: string;
  description: string;
  imageURL:string;
}

export interface ISECTION3HOME {
  title: string;
  description: string;
  imageURL:string;
  price:string,
  ImageLogo:string
}
export interface ISECTION4HOME {
  imageProfile:string;
  name: string;
  position: string;
  description:string;
}
export interface ISECTION6HOME {
  imageUrl: string;
  Date: string;
  title: string;
  description: string;
  variant: "small" | "large";
}

export interface ISECTION3AboutUs{
  number:string,
  circleId:string,
  title:string,
  description:string
}

export interface CredentialsRegister{
    name:string,
    email:string,
    password:string,
    username:string,
    address?:string
}
export interface CredentialsLogin{
    identifier:string,
    password:string,
}
export interface CredentialsContactUs{
  name:string,
  email:string,
  description:string,
 
  
}

export interface IErrorResponse {//make this structure based on the framework i'm using (here strapi)
  error: {
    details?: {
      errors: {
        message: string;
      }[];
    };
    message?: string;
  };
}

export interface IdataAPI{
        id: {
                videoId: string
            },
        snippet: {
        publishedAt:string,
        channelId:string,
        title:string,
        description:string,
        thumbnails:{high:{url:string,width:number,height:number}},
        channelTitle:string,
        liveBroadcastContent:string,
        publishTime:string
        }
      }

export interface Idata{
    number:number,
    price:number,
}
