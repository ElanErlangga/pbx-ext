import {
    BadgeColor,
    ContentRating,
    SourceInfo,
    SourceIntents,
} from '@paperback/types'

import {
    getExportVersion,
    MangaStream
} from '../MangaStream'

const DOMAIN = 'https://komikcast.cz'

export const KomikcastInfo: SourceInfo = {
    version: getExportVersion('0.0.3'),
    name: 'Komikcast',
    description: `Extension that pulls manga from ${DOMAIN}`,
    author: 'ElanErlangga',
    authorWebsite: 'http://github.com/ElanErlangga',
    icon: 'icon.png',
    contentRating: ContentRating.MATURE,
    websiteBaseURL: DOMAIN,
    intents: SourceIntents.MANGA_CHAPTERS | SourceIntents.HOMEPAGE_SECTIONS | SourceIntents.CLOUDFLARE_BYPASS_REQUIRED | SourceIntents.SETTINGS_UI,
    sourceTags: [
        {
            text: "Indonesia",
            type: BadgeColor.GREY
        },
    ]
}

export class Komikcast extends MangaStream {

    baseUrl: string = DOMAIN

    override directoryPath = 'komik'

    override usePostIds = false

    override configureSections() {
        this.homescreen_sections['popular_today'].selectorFunc = ($: CheerioStatic) => $('div.swiper-slide', $('span:contains(Hot Komik Update)')?.parent()?.next())
        this.homescreen_sections['popular_today'].titleSelectorFunc = ($: CheerioStatic) => $('div.title').text().trim()
        this.homescreen_sections['popular_today'].subtitleSelectorFunc = ($: CheerioStatic, element: CheerioElement) => $('div.chapter', element).text().trim()
        this.homescreen_sections['popular_today'].getViewMoreItemsFunc = (page: string) => `daftar-komik/page/${page}/?orderby=popular`
        this.homescreen_sections['latest_update'].selectorFunc = ($: CheerioStatic) => $('div.utao', $('span:contains(Rilisan Terbaru)')?.parent()?.next())
        this.homescreen_sections['latest_update'].titleSelectorFunc = ($: CheerioStatic) => $('h3').text().trim()
        this.homescreen_sections['latest_update'].subtitleSelectorFunc = ($: CheerioStatic, element: CheerioElement) => $('div.chapter', element).text().trim()
        this.homescreen_sections['latest_update'].getViewMoreItemsFunc = (page: string) => `daftar-komik/page/${page}/?sortby=update`
        this.homescreen_sections['new_titles'].enabled = false
        this.homescreen_sections['top_alltime'].enabled = false
        this.homescreen_sections['top_monthly'].enabled = false
        this.homescreen_sections['top_weekly'].enabled = false

    }
}