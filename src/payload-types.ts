/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export type LinkFieldArray =
  | {
      text: string;
      type: 'internal' | 'external';
      relationship?: {
        relationTo: 'pages';
        value: string | Page;
      } | null;
      anchor?: string | null;
      url?: string | null;
      rel?: ('noreferrer' | 'nofollow')[] | null;
      newTab?: boolean | null;
      umamiEvent?: string | null;
      umamiEventId?: string | null;
      id?: string | null;
    }[]
  | null;

export interface Config {
  collections: {
    faqs: Faq;
    inquiries: Inquiry;
    media: Media;
    pages: Page;
    users: User;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    footer: Footer;
    navigation: Navigation;
  };
}
export interface Faq {
  id: string;
  question: string;
  answer?: {
    root: {
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      type: string;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
export interface Inquiry {
  id: string;
  first: string;
  last: string;
  email: string;
  phone: string;
  startDate: string;
  endDate?: string | null;
  budget: string;
  location: string;
  information: string;
  photographerNames?: string | null;
  openToOtherCreators: 'no' | 'yes';
  updatedAt: string;
  createdAt: string;
}
export interface Media {
  id: string;
  alt: string;
  dataUrl?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  sizes?: {
    preview?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
export interface Page {
  id: string;
  title: string;
  description: string;
  content?: {
    root: {
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      type: string;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  slug?: string | null;
  parent?: (string | null) | Page;
  breadcrumbs?:
    | {
        url?: string | null;
        label?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
export interface User {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  roles: ('admin' | 'editor' | 'public')[];
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
export interface Footer {
  id: string;
  faqs?: (string | Faq)[] | null;
  linkGroups?:
    | {
        heading: string;
        links?: LinkFieldArray;
        id?: string | null;
      }[]
    | null;
  marquee: string;
  copyright: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
export interface Navigation {
  id: string;
  links?: LinkFieldArray;
  callToAction: ButtonLinkFieldGroup;
  updatedAt?: string | null;
  createdAt?: string | null;
}
export interface ButtonLinkFieldGroup {
  variant: 'outlined' | 'solid';
  size: 'sm' | 'md' | 'lg';
  icon?: ('arrowRight' | 'arrowUpRight' | 'instagram' | 'menu' | 'chevronDown' | 'tikTok' | 'x') | null;
  iconPosition?: ('none' | 'left' | 'right' | 'center') | null;
  link: LinkFieldGroup;
}
export interface LinkFieldGroup {
  text: string;
  type: 'internal' | 'external';
  relationship?: {
    relationTo: 'pages';
    value: string | Page;
  } | null;
  anchor?: string | null;
  url?: string | null;
  rel?: ('noreferrer' | 'nofollow')[] | null;
  newTab?: boolean | null;
  umamiEvent?: string | null;
  umamiEventId?: string | null;
  id?: string | null;
}

declare module 'payload' {
  // @ts-ignore
  export interface GeneratedTypes extends Config {}
}
