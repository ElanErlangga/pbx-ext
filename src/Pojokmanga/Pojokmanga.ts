import {
  ContentRating,
  SourceInfo,
  BadgeColor,
  SourceIntents,
} from "@paperback/types";

import { getExportVersion, Madara } from "../Madara";

const DOMAIN = "https://pojokmanga.info";

export const PojokmangaInfo: SourceInfo = {
  version: getExportVersion("0.0.3"),
  name: "Pojokmanga",
  description: `Extension that pulls manga from ${DOMAIN}`,
  author: "ElanErlangga",
  authorWebsite: "https://github.com/ElanErlangga",
  icon: "icon.png",
  contentRating: ContentRating.EVERYONE,
  websiteBaseURL: DOMAIN,
  sourceTags: [
    {
      text: "Indonesian",
      type: BadgeColor.GREY,
    },
  ],
  intents:
    SourceIntents.MANGA_CHAPTERS |
    SourceIntents.HOMEPAGE_SECTIONS |
    SourceIntents.CLOUDFLARE_BYPASS_REQUIRED |
    SourceIntents.SETTINGS_UI,
};

export class Pojokmanga extends Madara {
  baseUrl: string = DOMAIN;

  override chapterEndpoint = 1;

  override hasAdvancedSearchPage = true;

  override hasProtectedChapters = true;

  override directoryPath = "komik";
}
