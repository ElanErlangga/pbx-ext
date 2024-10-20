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

const DOMAIN = 'https://mangasusuku.com'

export const MangasusuInfo: SourceInfo = {
    version: getExportVersion('0.0.2'),
    name: 'Mangasusu',
    description: `Extension that pulls manga from ${DOMAIN}`,
    author: 'ElanErlangga',
    authorWebsite: 'http://github.com/ElanErlangga',
    icon: 'icon.png',
    contentRating: ContentRating.ADULT,
    websiteBaseURL: DOMAIN,
    intents: SourceIntents.MANGA_CHAPTERS | SourceIntents.HOMEPAGE_SECTIONS | SourceIntents.CLOUDFLARE_BYPASS_REQUIRED | SourceIntents.SETTINGS_UI,
    sourceTags: [
    {
        text: "Indonesia",
        type: BadgeColor.GREY
    },
    {
        text: "18+",
        type: BadgeColor.RED
    }
    ]
}

export class Mangasusu extends MangaStream {

    baseUrl: string = DOMAIN

    override manga_tag_selector_box = 'div.seriestugenre'

    override directoryPath = 'komik'

    override configureSections(): void {
        this.homescreen_sections['new_titles'].enabled = false
        this.homescreen_sections['top_alltime'].enabled = false
        this.homescreen_sections['top_monthly'].enabled = false
        this.homescreen_sections['top_weekly'].enabled = false
        this.homescreen_sections['latest_update'].selectorFunc = ($: CheerioStatic) => $('div.stylesven', $('h2:contains(Latest Update)')?.parent()?.next())
        this.homescreen_sections['latest_update'].subtitleSelectorFunc = ($: CheerioStatic, element: CheerioElement) => $('ul.svenchapters.Manhwa li:first-child a', element).first().text().trim()
    }
}