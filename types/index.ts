export type DataSection = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  linkText: string;
  subTitle: string;
};

export interface DataMetric {
  id: number;
  imageUrl: string;
  title: string;
  subTitle: string;
}

export interface HelpSection {
  id: number;
  title: string;
  description: string;
  linkUrl: string;
  linkText: string;
}
export interface Testimonial {
  id: number;
  text: string;
  highlight: string;
  source: string;
  position: string;
  logoUrl: string;
}
