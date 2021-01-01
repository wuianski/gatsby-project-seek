import URI from 'urijs';

export const joinUrl = function (baseUrl: string, directory: string, url: string): string {
    var theUrl = new URI(url);
    if (theUrl.is("relative")) {
        theUrl = theUrl.absoluteTo(baseUrl);
    }

    return theUrl.directory(directory).toString();
};