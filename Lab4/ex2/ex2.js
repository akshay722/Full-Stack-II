const siteUrls = ["http://nba.com", "http://mlb.com", "http://nhl.com", "http://tesla.com"];

function openTabs(){
    for(i=0; i<siteUrls.length; i++){
        window.open(siteUrls[i], "_self");
    }
}

openTabs();