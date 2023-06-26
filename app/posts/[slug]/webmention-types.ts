export type webmentionEntry = {
  type: "entry";
  url: string;
  published: string;
  author: {
    type: string;
    name: string;
    photo: string;
    url: string;
  };
  "wm-received": string;
  "wm-target": string;
  "wm-property": "in-reply-to" | "mention-of" | "like-of" | "repost-of";
  "wm-id": Number;
  content: {
    text: string;
    html: string;
  };
  "wm-private": boolean;
};
export type webmentionFeed = {
  type: "feed";
  name: "webmentions";
  children: webmentionEntry[];
};
