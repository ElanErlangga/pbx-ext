import {
    BadgeColor,
    ContentRating,
    SourceInfo,
    SourceIntents
} from '@paperback/types'

import {
    getExportVersion,
    MangaStream
} from '../MangaStream'

const DOMAIN = 'https://tukangkomik.co'

export const TukangKomikInfo: SourceInfo = {
    version: getExportVersion('0.0.3'),
    name: 'TukangKomik',
    description: `Extension that pulls manga from ${DOMAIN}`,
    author: 'ElanErlangga',
    authorWebsite: 'http://github.com/ElanErlangga',
    icon: 'icon.png',
    contentRating: ContentRating.EVERYONE,
    websiteBaseURL: DOMAIN,
    intents: SourceIntents.MANGA_CHAPTERS | SourceIntents.HOMEPAGE_SECTIONS | SourceIntents.CLOUDFLARE_BYPASS_REQUIRED | SourceIntents.SETTINGS_UI,
    sourceTags: [
    {
        text: "Indonesia",
        type: BadgeColor.GREY
    },
    ]
}

export class TukangKomik extends MangaStream {

    baseUrl: string = DOMAIN

    override configureSections() {
        this.homescreen_sections['new_titles'].enabled = false
    }
}
