export interface worldNewsModule {
        status: string,
        copyright: string,
        section: string,
        last_updated: string,
        num_results: number,
        results: listWorldNews[]


}
export interface listWorldNews {
        
        section: string,
        title: string
        multimedia:multiMediaList[],
        abstract:string,
        created_date:string,
        byline:string,
        url:string
}
export interface multiMediaList{
        copyright:string,
        url:string|undefined,
        caption:string,
        legacy:any
        
}

export interface EachCountryNewsData{
        status: string,
        copyright: string,
       response:{
        docs:EachCountryNewsDataResults[]
       }
}

export interface EachCountryNewsDataResults{
        abstract:string;
        web_url:string;
        created_date:string;
        title:string;
        url:string;
        multimedia:multiMediaList[];
        headline:HeadlineData;
        byline:{original:string};
        pub_date:string;
     

}

export interface HeadlineData{
        main:string
}