/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Brisbane'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    beats: Beat;
    images: Image;
    zips: Zip;
    audio: Audio;
    users: User;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    beats: BeatsSelect<false> | BeatsSelect<true>;
    images: ImagesSelect<false> | ImagesSelect<true>;
    zips: ZipsSelect<false> | ZipsSelect<true>;
    audio: AudioSelect<false> | AudioSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * Here you can see all the beats that are uploaded or you can upload a new beat.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "beats".
 */
export interface Beat {
  id: string;
  title: string;
  artwork: string | Image;
  description?: string | null;
  trackType: 'Beat' | 'Beat with Hook' | 'Topline' | 'Vocal';
  visibility?: ('Public' | 'Private' | 'Unlisted') | null;
  releaseDate?: string | null;
  includingInBulkDiscounts?: boolean | null;
  allowCoupons?: boolean | null;
  untagged: string | Audio;
  tagged?: (string | null) | Audio;
  stems?: (string | null) | Zip;
  tags?:
    | {
        tag?: string | null;
        id?: string | null;
      }[]
    | null;
  genres?:
    | {
        genre?: string | null;
        id?: string | null;
      }[]
    | null;
  key?: ('C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#' | 'A' | 'B') | null;
  mode?:
    | (
        | 'Major'
        | 'Natural Minor'
        | 'Melodic Minor'
        | 'Harmonic Minor'
        | 'Major Pentatonic'
        | 'Minor Pentatonic'
        | 'Blues'
        | 'Dorian'
        | 'Mixolydian'
        | 'Phrygian'
      )
    | null;
  BPM?: number | null;
  moods?:
    | {
        mood?: string | null;
        id?: string | null;
      }[]
    | null;
  instruments?:
    | {
        instrument?: string | null;
        id?: string | null;
      }[]
    | null;
  nonExclusiveLicenses?:
    | {
        name?: string | null;
        downloads?: ('MP3' | 'MP3, WAV' | 'MP3, WAV, Stems') | null;
        price?: number | null;
        active?: boolean | null;
        id?: string | null;
      }[]
    | null;
  exclusiveLicense?: {
    makeOfferOnly?: boolean | null;
    price?: number | null;
    downloads?: 'MP3, WAV, Stems' | null;
    active?: boolean | null;
  };
  freeDownload?:
    | {
        name?: string | null;
        downloads?: 'MP3' | null;
        active?: boolean | null;
        id?: string | null;
      }[]
    | null;
  Others?: {
    voiceTags?:
      | {
          name: string;
          audio: string | Audio;
          isDefault?: boolean | null;
          published?: boolean | null;
          id?: string | null;
        }[]
      | null;
    collaborations?: {
      thirdPartySamples?: boolean | null;
      samples?:
        | {
            sampleOrLoop?: string | null;
            source?: string | null;
            id?: string | null;
          }[]
        | null;
    };
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * Here you can see all the Images that are uploaded or you can upload a new image.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "images".
 */
export interface Image {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * Here you can see all the Audio Files that are uploaded or you can upload a new Audio File.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "audio".
 */
export interface Audio {
  id: string;
  alt?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * Here you can see all the Zip Files that are uploaded or you can upload a new Zip File.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "zips".
 */
export interface Zip {
  id: string;
  notes?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'beats';
        value: string | Beat;
      } | null)
    | ({
        relationTo: 'images';
        value: string | Image;
      } | null)
    | ({
        relationTo: 'zips';
        value: string | Zip;
      } | null)
    | ({
        relationTo: 'audio';
        value: string | Audio;
      } | null)
    | ({
        relationTo: 'users';
        value: string | User;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
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
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "beats_select".
 */
export interface BeatsSelect<T extends boolean = true> {
  title?: T;
  artwork?: T;
  description?: T;
  trackType?: T;
  visibility?: T;
  releaseDate?: T;
  includingInBulkDiscounts?: T;
  allowCoupons?: T;
  untagged?: T;
  tagged?: T;
  stems?: T;
  tags?:
    | T
    | {
        tag?: T;
        id?: T;
      };
  genres?:
    | T
    | {
        genre?: T;
        id?: T;
      };
  key?: T;
  mode?: T;
  BPM?: T;
  moods?:
    | T
    | {
        mood?: T;
        id?: T;
      };
  instruments?:
    | T
    | {
        instrument?: T;
        id?: T;
      };
  nonExclusiveLicenses?:
    | T
    | {
        name?: T;
        downloads?: T;
        price?: T;
        active?: T;
        id?: T;
      };
  exclusiveLicense?:
    | T
    | {
        makeOfferOnly?: T;
        price?: T;
        downloads?: T;
        active?: T;
      };
  freeDownload?:
    | T
    | {
        name?: T;
        downloads?: T;
        active?: T;
        id?: T;
      };
  Others?:
    | T
    | {
        voiceTags?:
          | T
          | {
              name?: T;
              audio?: T;
              isDefault?: T;
              published?: T;
              id?: T;
            };
        collaborations?:
          | T
          | {
              thirdPartySamples?: T;
              samples?:
                | T
                | {
                    sampleOrLoop?: T;
                    source?: T;
                    id?: T;
                  };
            };
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "images_select".
 */
export interface ImagesSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "zips_select".
 */
export interface ZipsSelect<T extends boolean = true> {
  notes?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "audio_select".
 */
export interface AudioSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}