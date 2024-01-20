export interface Post {
  uid?: string;
  type?: string;
  title?: string;
  resume?: string;
  content?: string | TrustedHTML;
  imageUrl?: string;
  imageAlt?: string;
  updatedAt?: string;
}
