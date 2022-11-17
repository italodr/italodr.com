export interface GrayMatter {
  title: string;
  description: string;
  slug: string;
  date: string;
  index?: boolean;
  follow?: boolean;
  updated: string;
  rawDate?: string;
  rawUpdated?: string;
  terms: string[];
  content: string;
}
