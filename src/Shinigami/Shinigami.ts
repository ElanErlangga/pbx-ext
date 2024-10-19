import {
  ContentRating,
  SourceInfo,
  BadgeColor,
  SourceIntents,
} from "@paperback/types";

import { getExportVersion, Madara } from "../Madara";

const DOMAIN = "https://shinigami05.com";

export const ShinigamiInfo: SourceInfo = {
  version: getExportVersion("0.0.7"),
  name: "Shinigami",
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

export class Shinigami extends Madara {
  baseUrl: string = DOMAIN;

  override chapterEndpoint = 1;

  override hasAdvancedSearchPage = true;

  override directoryPath = "series";
}
